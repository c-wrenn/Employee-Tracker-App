DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

-- use this database so that the following code will affect this database 
USE employee_tracker_db;

-- will hold names of each employee 
CREATE TABLE employees (
    --autoincrements when a new employee is added
    id INT  NOT NULL,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  department NOT NULL,
  empRole NOT NULL
);
-- holds department job title --
--CREATE TABLE department (
  -- id INT PRIMARY KEY
  -- departmentTitle VARCHAR(30)
--);
-- holds each employees salary --
--CREATE TABLE roles (
  --  id INT PRIMARY KEY,
  --  department NOT NULL,
  --  salary DECIMAL

--);