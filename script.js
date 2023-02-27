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
      type: 'checkbox',
      name: 'projectLicense',
      message: 'What license are you using?',
      choices: ["MIT", "Apache", "GPLv2", "GPLv3"] // Add list of licenses here
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
        name: 'projectQuestionsGitHub',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'projectQuestionsEmail',
        message: 'Enter your Email Address'
      }

  ]);

  const generateREADME = (answers) =>

  `# **${answers.projectTitle}**

  ## **Description**
  ${answers.projectDescription}

  ## **Table of Contents**
  1. [Installation](#installation)
  2. [Usage](#usage)
  4. [Contributions](#contributions)
  5. [Tests](#tests)
  6. [FAQ](#faq)
  7. [License](#license)

  ## **Installation**
  ${answers.projectInstallation}

  ## **Usage**
  ${answers.projectUsage}

  ## **Contributions**
  ${answers.projectContribution}

  ## **Tests**
  ${answers.projectTests}

  ## **Questions**
  ${answers.projectQuestions}
  ### GitHub ***
  ${answers.projectQuestionsGitHub}
  *** Email ***
  ${answers.projectQuestionsEmails}


  ## **License**
  ${answers.projectLicense}

  `
// Depending on the answer of the License, it needs to generate the License Text and Logo
// Must be easier way than storing them in an array - For ALL licenses??

// https://shields.io/category/license // Badges



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


  // https://www.markdownguide.org/getting-started/