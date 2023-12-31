
const mysql= require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');


//create connection
const db = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    //mysql pw, no pw set
    password: '',
    //our database
    database: 'employee_tracker_db'
});



console.log(
    `
 _______   __      __   _____    ___    _________    ___   _______   _______
|   ____| |  \    /  | |     \  |   |  /     \\  \  /  /  |   ____|  |   ___|
|   |__   |   \  /   | |      | |   | |      | \  \/  /   |   |___   |   |__
|    __|  |    \/    | |   __/  |   | |      |  \   /     |    ___|  |   ___|
|   |____ |  |\  /|  | |  |     |   | |      |  |   |     |   |___   |  |___
|_______| |__| \/ |__| |__|     |___|  \____/   |___|     |_______|  |______|

 __________   _______       ___       ________    ___  ___  _______   _______ 
|___    ___| |   _   \     /   \     |    ____|  |  | /  / |  _____| |   _   \  
    |  |     |  |_|  |    /     \    |   |       |  |/  /  |  |____  |  |_|  | 
    |  |     |      /    /  __   \   |   |       |     /   |   ____| |      /
    |  |     |  | \  \  /  /   \  \  |   |_____  |  |\  \  |   |___  |  | \  \
    |__|     |__|  \__\/__/     \__\ |_________| |__| \__\ |_______| |__|  \__\
     

`                                                                       
);
tracker();
//function to start the app and start prompts
function tracker() {
    inquirer.prompt({
        name: 'startPage',
        type: 'list',
        message: 'Welcome! How can we get started?',
        choices: 
        [
        'View All Employees',
        'Add Employee',
        'View All Roles',
        'Update Employee Role',
        'Add Role',
        'View All Departments',
        'Add Department',
        'Exit'
        ]
    })
.then(answers => {
    switch (answers.startPage) {
        case 'View All Employees':
            //insert function that will complete this action
            viewEmployees();
            break;
        case 'View All Roles':
            viewRoles();
            break;
        case 'View All Departments':
            viewDepartments();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'Add Department':
            addDepartment();
            break;
        case 'Exit':
            console.log('Thank You for using Employee Tracker!');
            process.exit();
        default:
            break;
    }
});
};
//function to view all employees
function viewEmployees() {
    const query = 'SELECT * FROM employee';
    db.query(query,  (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        return;
      });
}
// function to view all roles
function viewRoles() {
    const query = 'SELECT * FROM role';
    db.query(query,  (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        return;
      });
}
//function to view all departments
function viewDepartments(){
    const query = 'SELECT * FROM department'; 
    db.query(query,  (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        return;
      });   
}
//function to add a new employee
async function addEmployee() {
   // const newEmployee = 'INSERT INTO employee SET ?';

    const roleQuery = await db.promise().query('SELECT * FROM role')
    const roles = roleQuery[0].map((role) => {
        return {
            name: role.title,
            value: role.id
        }
      } )
console.log('roles', roles)
inquirer.prompt([
{
    name:'new_firstName',
    type: 'input',
    message: 'What is the employees first name?',
},
{
    name: 'new_lastName',
    type: 'input',
    message: 'What is their last name?',
},
{
    name:'new_Role',
    type: 'list',
    message: 'Choose employee role:',
    choices: roles
}])
.then((newEmployee) =>{
    console.log(newEmployee.new_firstName, newEmployee.new_lastName, newEmployee.new_Role)
    //adds answers to the database
     db.query(`INSERT INTO employee (firstName, lastName, role_id) VALUES(?,?,?) `, [newEmployee.new_firstName, newEmployee.new_lastName, newEmployee.new_Role], (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      })
})
}
//functions to add a new role
async function addRole() {
    const departmentQuery = await db.promise().query('SELECT * FROM department')
    console.log(departmentQuery)
          const departments = departmentQuery[0].map((department) => {
            return {
                name: department.depName,
                value: department.id
            }
          } )
    inquirer.prompt([
    {
        name: 'newRoleTitle',
        type:'input',
        message:'Enter the title of the role you would like to add:'
    },
    {
        name: 'roleDepartment',
        type:'list',
        message: 'Which department would you like to add the role to?',
        choices: departments
    },
    {
        name: 'roleSalary',
        type: 'input',
        message: 'Enter the salary for the role:'
    }
])
.then((newRole) =>{
    console.log(newRole.newRoleTitle, newRole.roleDepartment, newRole.roleSalary)
    //adds answers to the database
     db.query(`INSERT INTO role (title, department_id, salary) VALUES(?,?,?) `, [newRole.newRoleTitle, newRole.roleDepartment, newRole.roleSalary], (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      })
})
}
//function to add a new department
function addDepartment() {
    inquirer.prompt([
    {
        name:'newDepName',
        type: 'input',
        message:'Enter the name of the department you would like to add:'
    }
])
    .then((newDepartment) =>{
        console.log(newDepartment.newDepName)
        //adds answers to the database
         db.query(`INSERT INTO department (depName) VALUES(?) `, [newDepartment.newDepName], (err, result) => {
            if (err) {
              console.log(err);
            }
            console.log(result);
          })

})
}