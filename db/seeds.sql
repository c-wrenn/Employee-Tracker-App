
INSERT INTO department (id, depName)
VALUES
(1, 'Finance'),
(2, 'Sales'),
(3, 'Technology'),
(4, 'Legal'),
(5, 'Management');

INSERT INTO role (id, title, department_id, salary)
VALUES
(1, "Accounting", 1, 300000),
(2, "Sales Lead", 2, 150000),
(3, "Computer_Engineer", 3, 250000),
(4, "Lawyer", 4, 475000),
(5, "Manager", 5, 135000);



INSERT INTO  employee (id, firstName, lastName, role_id, manager_id)
VALUES
(1, "Denesha", "Luke", 5, NULL),
(2, "Alice", "Thorton",1, 1),
(3, "Ivy", "Mathis", 2, 1),
(4, "Crislyn", "Wren" , 3, 1),
(5, "Sally", "Doe", 1, 1),
(6, "Beckett", "Harvey", 4, 1);
