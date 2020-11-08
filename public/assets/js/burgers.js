// attatch handlebars to DOM until fully loaded
$(function () {
  $(".devour").on("click", function (event) {
    var id = $(this).data("id");
    var justDevoured = $(this).data("justdevoured");

    var justDevouredState = {
      devoured: justDevoured,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: justDevouredState,
    }).then(function () {
      console.log("changed eaten state to", justDevoured);
      // Reload page to get updated list of burgers
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // preventDefault on submitted events
    event.preventDefault();

    var newBurger = {
      name: $(bn).val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload page to get the updated list of burgers
      location.reload();
    });
  });
});
