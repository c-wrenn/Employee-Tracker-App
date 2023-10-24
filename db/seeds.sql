
INSERT INTO  employee (id, firstName, lastName, role_id, manager_id)
VALUES
(1, "Alice", "Thorton",(SELECT id FROM role WHERE title = 'Accounting'),
(SELECT firstName FROM employee WHERE role_id = 'Manager' )),
(2, "Ivy", "Mathis", (SELECT id FROM role WHERE title = 'Sales Lead'),
(SELECT firstName FROM employee WHERE role_id = 'Manager' )),
(3, "Crislyn", "Wren" , (SELECT id FROM role WHERE title = 'Computer_Engineer'),
 (SELECT firstName FROM employee WHERE role_id = 'Manager' )),
(4, "Sally", "Doe", (SELECT id FROM role WHERE title = 'Accounting'),
(SELECT firstName FROM employee WHERE role_id = 'Manager' )),
(5, "Beckett", "Harvey", (SELECT id FROM role WHERE title = 'Lawyer'),
 (SELECT firstName FROM employee WHERE role_id = 'Manager' )),
(6, "Denesha", "Luke", (SELECT id FROM role WHERE title = 'Manager'),
('NULL' ));


INSERT INTO role (id, title, department_id, salary)
VALUES
(1, "Accounting", (SELECT id FROM department WHERE depName = 'Finance' ), 300000),
(2, "Sales Lead", (SELECT id FROM department WHERE depName = 'Sales' ), 150000),
(3, "Computer_Engineer", (SELECT id FROM department WHERE depName = 'Technology' ),250000),
(4, "Lawyer",(SELECT id FROM department WHERE depName = 'Legal' ), 475000),
(5, "Manager", (SELECT id FROM department WHERE depName = 'Management'), 135000);

INSERT INTO department (id, depName)
VALUES
(1, 'Finance'),
(2, 'Sales'),
(3, 'Technology'),
(4, 'Legal'),
(5, 'Management');