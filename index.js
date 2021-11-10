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
        message:'Enter your installation instructions:',
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
        message:'Enter your test instructions:',
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
    switch (data.license) {

        case 'ISC': 
        license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
        case 'MIT':
        license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            break;
        case 'Apache 2.0': 
        license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
        case 'Boost 1.0':
        license = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
        default:
            license = '';
            break;
    }
    const string = `
# ${data.title}
## license
${license}

## Description
${data.description}

## Installation Instructions
${data.installation}

## usage information
${data.usage}

## contribution guidelines
${data.contribution}

## test instructions
${data.test}

## Questions
[My Github Profile: ${data.github}](https://github.com/${data.github})

Email me your questions at:[${data.email}](mailto:${data.email})

## Video
Watch this for a guide on this project[Video]()
`


    fs.writeFile("sampleREADME.md",  string, (err) =>
    err? console.error(err) : console.log("created!")
)
})
