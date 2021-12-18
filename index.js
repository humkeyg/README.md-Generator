// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Contribution guidelines:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license are you covered under?',
        choices: [
          'BSD',
          'MIT',
          'GPL'
        ]
      },
      {
        type: 'input',
        name: 'username',
        message: 'Github username:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Link to Github:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]);
};
  
const generateREADME = ({ title, description, instructions, usage, test, contribution, license, username, github, email }) =>
`# ${title}

## ${description}

## Installation

${instructions}

## Usage

${usage}

## Tests

${test}

## Contributing

${contribution}

## License

This application is covered under ${license}.

## Questions

Github:
[${username}](${github})

Please email me if you have further questions: (${email}).`
;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  promptUser()
    .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
