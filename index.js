const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

const inquirer = require('inquirer');
const fs = require('fs')

const teamArray = []

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

const generateHTML = ({ name, id, email}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Team Profiles!</h1>
  </div>
</div>

<div class='card employee-card'>
    <div class='card-header'>
        <h2 class='card-title'>${name}</j3>
        <h3 class='card-title><<i class="fas fa-glasses mr-2"></i></h3>
    </div>
    <div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>    
    </ul>
</div>
</div>

</body>
</html>`;

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
            //  for loop on team array 
            // import inside body and cards
         
        }
     })
}

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