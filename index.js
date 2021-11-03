const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

// node
const inquirer = require('inquirer');
const fs = require('fs')

const teamArray = []

// manager prompt 
const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message:'What is your ID?'
        },
        {
            type: 'input',
            name: 'email',
            message:'What is your email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message:'What is your office number?'
         },
     ])
}

const employeePrompt = () => {
    return inquirer.prompt([
       {
        type: "list",
        name: "role",
        message: "What is the role of the Employee",
        choices: [ "Engineer", "Intern"],
         },
       
        ])
}

const init = () => {
    managerPrompt()
    .then(answer => {
        const manager = new Manager(answer.name,answer.id,answer.email, answer.officeNumber) 
        teamArray.push(manager)
        menu();
    })   
    //   .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
    //   .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
//   ask manager if they want to add more employees
function menu(){
    inquirer.prompt({
        type:"confirm",
        message: "Do you want to add more employees",
        name: "confirm"
     })
     .then(response => {
         if (response.confirm === true){
         employeePrompt()
         .then(answer => {
             if(answer.role === "Engineer"){
                engineerPrompt() 
                .then(answer => {
                    const engineer = new Engineer(answer.name,answer.id,answer.email, answer.gitHub) 
                    teamArray.push(engineer)
                    menu();
                })
             }
             else {
                 internPrompt()
                 .then (answer => {
                     const intern = new Intern(answer.name,answer.id,answer.email, answer.school)
                     teamArray.push(intern)
                     menu();
                 })
             }
         })
         }
         else {
             console.log(teamArray)
             for (let index = 0; index < teamArray.length; index++) {
                 const element = array[index];
                 
             }
            //  for loop on team array 
            // import inside body and cards
         
        }
     })
}

// engineer prompt 
const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message:'What is your ID?'
        },
        {
            type: 'input',
            name: 'email',
            message:'What is your email?'
        },
        {
            type: 'input',
            name: 'gitHub',
            message:'What is your gitHub user name?'
         },
     ])
}

// intern prompt 
const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message:'What is your ID?'
        },
        {
            type: 'input',
            name: 'email',
            message:'What is your email?'
        },
        {
            type: 'input',
            name: 'school',
            message:'What college did you attend?'
         },
     ])
}

  init();