//require in 
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
_________  __      ___ ______   _____   _________    ___   _______   _______
|   ____| |  \    /  | |     \  |   |  /     \\  \  /  /  |   ____|  |   ___|
|   |__   |   \  /   | |      | |   | |      | \  \/  /   |   |___   |   |__
|    __|  |    \/    | |   __/  |   | |      |  \   /     |    ___|  |   ___|
|   |____ |  |\  /|  | |  |     |   | |      |  |   |     |   |___   |  |___
|_______| |__| \/ |__| |__|     |___|  \____/   |___|     |_______|  |______|
`                                                                       
);

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
            break;
        case 'Add Role':
            break;
        case 'Add Department':
            break;
        case 'Exit':
            console.log('Thank You for using Employee Tracker!');
            process.exit();

        default:
            break;
    }
});

function viewEmployees() {
    const query = 'SELECT * FROM department';
    db.query(query,  (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        return;
      });
}

function viewRoles() {
    const query = 'SELECT * FROM role';
}

function viewDepartments(){
    const query= 'SELECT * FROM department';    
}