-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS burger_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

-- Create the table plans.
CREATE TABLE burger (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(300) NOT NULL,
  devoured BOOLEAN DEFAULT,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burger (burger) VALUES ('Build Your Own Burger.');

SELECT * FROM burger;