DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;

-- use this database so that the following code will affect this database 
USE employee_tracker_db;


CREATE TABLE employee (
    
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (manager_id) REFERENCES employee(firstName) 
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  department_id INT,
  salary DECIMAL,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE department (
  id INT PRIMARY KEY,
  depName VARCHAR(30)
);