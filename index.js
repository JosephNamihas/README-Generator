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
      message: 'Enter installation instructions',
    },
    {
      type: 'input',
      name: 'projectUsage',
      message: 'How is your product used / accessed?',
    },
    {
      type: 'list',
      name: 'projectLicense',
      message: 'What license are you using?',
      choices: ["MIT", "Apache", "IBM", "Perl"] // Add list of licenses here
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
  6. [Questions](#questions)
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
  ### GitHub
  [GitHub Account](https://github.com/${answers.projectQuestionsGitHub})

  ### Email
  Please contact me on the below e-mail address with any questions you may have
  \n[Click Here To Send Me An E-mail!](mailto:${answers.projectQuestionsEmail})

  ## **License**

  ${answers.projectLicense === 
    "Apache" ? "Apache" + "" + '<br>' + "" + "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" : answers.projectLicense === "MIT" ? "MIT" + "" + '<br>' + "" + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" : answers.projectLicense === "IBM" ? "IBM" + "" + '<br>' + "" + "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)" :  answers.projectLicense === "Perl" + "Perl" + '<br>' + "" + "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"}

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