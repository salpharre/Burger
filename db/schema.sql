-- Delete database if it already exists
DROP DATABASE IF EXISTS burgerDB;
-- Create database
CREATE burgerDB;
-- Use name database
USE burgerDB;

-- Table for database
CREATE TABLE burgers {
    id NOT NULL AUTO_INCREMENT;
    burger_name VARCHAR(30) NOT NULL;
    devoured BOOLEAN DEFAULT FALSE;
    PRIMARY KEY (id)
};
