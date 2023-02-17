const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>

  inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'projectDescription',
      message: 'Enter project description:',
    },


    // Enter a table of contents?

    {
      type: 'input',
      name: 'projectInstallation',
      message: 'Enter Installation Instructions',
    },
    {
      type: 'input',
      name: 'projectUsage',
      message: 'How is your product used / accessed?',
    },
    {
        // May need dropdown or a selection of options here (type dropdown?)
      type: 'input',
      name: 'projectLicense',
      message: 'What license are you using?',
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'Who is contributing to this project?',
    },

    {
        type: 'input',
        name: 'projectTests',
        message: 'What tests have been performed on this project?',
    },
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'Enter your FAQ',
      },


  ]);

  const generateREADME = (answers) =>
  `# **${answers.projectTitle}**

  ## **Description**
  ${answers.projectDescription}

  ## **Installation**
   ${answers.projectInstallation}

  ## **Table of Contents**
    - ${answers.projectUsage}
    - ${answers.projectLicense}
    - ${answers.projectContribution}
    - ${answers.projectQuestions}

  ## **Usage**
  - ${answers.projectUsage}

  ## **License**
  - ${answers.projectLicense}

  ## **Project Contributions**
  - ${answers.projectContribution}

  ## **Tests**
  - ${answers.projectTests}

  ## **FAQ**
  - ${answers.projectQuestions}

  `

  // Inline CSS? Bootstrap?

  promptUser()
  .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
  .then(() => console.log('Successfully wrote to README.md'))
  .catch((err) => console.error(err));

  
  // npm install inquirer@6.5.0

  // Change the index.html to README.md
  // Change the generateHTML function to generateREADME
  // Change the syntax of the HTML to reflect README syntax


  // Promises - Any call to an API, will return a promise.
  // A promise is telling the code "I promise you, I will deliver this bit"
  // Java Script Promises

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

  // Asynchronous - wait until I get this data before DOM elements loaded into page


  // https://www.markdownguide.org/getting-started/