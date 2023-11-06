
INSERT INTO department (name) VALUES
('Department A'),
('Department B');

-- Sample roles with department references
INSERT INTO role (title, salary, department_id) VALUES
('Tech L1', 50000, 1),
('Tech L2', 55000, 1),
('Tech L3', 60000, 2),
('Tech L4', 65000, 2);

-- Sample employees with role and manager references
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Alex', 'Akron', 1, NULL),
('Barry', 'Black', 2, 1),
('Carter', 'Capps', 3, NULL);


