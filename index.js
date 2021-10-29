const inquirer = require('inquirer');
const fs = require('fs')

const promptUser = () => {
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
     ])
}

const init = () => {
    promptUser()
      .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();