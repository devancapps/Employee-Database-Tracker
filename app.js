const inquirer = require('inquirer');
const EmployeeQueries = require('./models/EmployeeQueries');

function mainMenu() {
  inquirer
    .prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'Add an employee',
        // Add more choices for other actions
        'Exit',
      ],
    })
    .then(async (answers) => {
      switch (answers.action) {
        case 'View all employees':
          const employees = await EmployeeQueries.getAllEmployees();
          // Process and display employee data here
          break;
        case 'Add an employee':
          // Prompt the user to enter employee details and use EmployeeQueries.addEmployee()
          break;
        // Add cases for other actions
        case 'Exit':
          db.end();
          console.log('Goodbye!');
          break;
      }
    });
}

mainMenu();
