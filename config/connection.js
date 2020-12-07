// require myql
var mysql = require("mysql");

// generate connection
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "100084896",
    database: "burger_db",
  });
}

// initiate connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
