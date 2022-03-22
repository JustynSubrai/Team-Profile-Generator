const inquirer = require('inquirer');
const fs = require('fs');
const htmlTemplate = require('./src/htmlTemplate');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeList = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'Which employee would you like to add?',
        choices: () => {
            if(employeeList.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        } 
    },
    {
        type: "input",
        name: "name",
        message: "What is the employee's first and last name?",
        validate:nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log("Please enter a first and last name.")
                return false
            }
        }
    },
    {
        type: "input",
        name: "idNum",
        message: "What is the employee's ID number?",
        validate: idInput => {
          if (!isNaN(parseInt(idInput))) {
               return true;
           } else {
               console.log("Please enter a number!")
               return false;
           }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
        validate: emailInput => {
            if (emailInput.includes("@")) {
                return true
            } else {
                console.log("Please enter a valid email address.")
                return false
            }
        }
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?",
        when: ({ role }) => {
            if (role === "Manager") {
                return true
            } else {
                return false
            }
        },
        validate: officeNumInput => {
            if (!isNaN(parseInt(officeNumInput))) {
                return true;
            } else {
                console.log("Please enter a number!")
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        when: ({role}) => {
            if (role === "Engineer") {
                return true
            } else {
                return false
            }
        },
        validate: githubInput => {
            if (githubInput) {
                return true
            } else {
                console.log("Please enter a GitHub username.")
                return false
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        when: ({role}) => {
            if (role === "Intern") {
                return true
            } else {
                return false
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true
            } else {
                console.log("Please enter a school name.")
                return false
            }
        }
    },
    {
        type: "confirm",
        name: "add",
        message: "Would you like to add another employee?",
        default: true,
        validate: (addMoreInput) => {
            if (addMoreInput === false)
            {
                return;
            }
        }
    }
];

function writePage(fileName, data) {
    console.log(data)
    fs.writeFile(fileName, data, err => {
    err ? console.log(err) : console.log("The html was successfully generated!");
   }
)}

function userQuestions() {
    inquirer.prompt(questions)
        .then((response) => {
            switch(response.role){
                case 'Manager':
                const manager=new Manager(response.name,response.idNum,response.email,response.officeNum)
                employeeList.push(manager)
                break;
                case 'Engineer':
                    const engineer=new Engineer(response.name,response.idNum,response.email,response.github)
                    employeeList.push(engineer)
                    break;
                case 'Intern':
                    const intern=new Intern(response.name,response.idNum,response.email,response.school)
                    employeeList.push(intern)
                    break;
                default:
                    break;
            }
        if (response.add === true) {
            return userQuestions(); 
        } else {
            const answers = htmlTemplate(employeeList)
            writePage('./dist/index.html', answers)
        };
    });
};

function startQuestion() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'startApp',
        message: 'Welcome to the Team Profile Generator! Would you like to build a webpage for your team?',
        default: true,
    }])
    .then(() => {
        if(response = true){
            userQuestions();
        }
        else {
            return;
        };
    });
};

startQuestion();