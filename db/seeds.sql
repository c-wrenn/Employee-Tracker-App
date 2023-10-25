
INSERT INTO  employee (id, firstName, lastName, role_id, manager_id)
VALUES
(1, "Alice", "Thorton",1, "Denesha"),
(2, "Ivy", "Mathis", 2, "Denesha"),
(3, "Crislyn", "Wren" , 3, "Denesha"),
(4, "Sally", "Doe", 1, "Denesha"),
(5, "Beckett", "Harvey", 4, "Denesha"),
(6, "Denesha", "Luke", 5, ('NULL' ));


INSERT INTO role (id, title, department_id, salary)
VALUES
(1, "Accounting", 1, 300000),
(2, "Sales Lead", 2, 150000),
(3, "Computer_Engineer", 3, 250000),
(4, "Lawyer", 4, 475000),
(5, "Manager", 5, 135000);

INSERT INTO department (id, depName)
VALUES
(1, 'Finance'),
(2, 'Sales'),
(3, 'Technology'),
(4, 'Legal'),
(5, 'Management');