const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type:'input',
        message:'What is your project title?',
        name:'title'
    },
    {
        type:'input',
        message:'Enter your description:',
        name:'description'
    },
    {
        type:'input',
        message:'Enter your installation instructions: (npm i)',
        name:'installation'
    },
    {
        type:'input',
        message:'Enter your usage information:',
        name:'usage'
    },
    {
        type:'input',
        message:'Enter your contribution guidelines:',
        name:'contribution'
    },
    {
        type:'input',
        message:'Enter your test instructions: (node index.js)',
        name:'test'
    },
    {
        type: 'list',
      choices:['ISC','MIT', 'Apache 2.0', 'Boost 1.0', 'None'],
      message: 'What license are you using?',
      name: 'license',
    },
    {
        type:'input',
        message:'Enter your github username:',
        name:'github'
    },
    {
        type:'input',
        message:'Enter your email:',
        name:'email',
    },
]).then((data) => {
    let license;
    let link;
    switch (data.license) {

        case 'ISC': 
        license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue)](https://opensource.org/licenses/ISC)';
        link = 'https://opensource.org/licenses/ISC'
            break;
        case 'MIT':
        license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)';
        link = 'https://opensource.org/licenses/MIT'
            break;
        case 'GPL': 
        license = '[![License: GPL](https://img.shields.io/badge/License-GPL-blue)](https://opensource.org/licenses/AGPL-3.0)';
        link = 'https://opensource.org/licenses/AGPL-3.0'
            break;
        default:
            license = '';
            break;
    }
    const string = `
    

# ${data.title}
${license}
## Description
${data.description}

## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [Video](#video)

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

## License
This project is licensed under the terms of the [${data.license}](${link}) license

## Questions
My Github Profile: [${data.github}](https://github.com/${data.github})

Email me your questions at: [${data.email}](mailto:${data.email})

## Video
Watch this for a guide on this project: [Video](https://drive.google.com/file/d/1zXHvoDlDelMJ3odNWEvhDtj3N-9MNoGE/view?usp=sharing)
`


    fs.writeFile("README.md",  string, (err) =>
    err? console.error(err) : console.log("created!")
)
})
