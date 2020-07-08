-- Delete database if it already exists
DROP DATABASE IF EXISTS burgerDB;
-- Create database
CREATE DATABASE burgerDB;
-- Use name database
USE burgerDB;

-- Table for database
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
