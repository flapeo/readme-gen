const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
console.log('readme Gen by brayden :D')


    function promptUser() {
         return inquirer.prompt([
     {
            type: "input",
            name: "title",
            message: "(Enter your title) "
     },
    {
            type: "input",
            name: "description",
            message: "(Descripton of the program)"
    }, 
    {
            type: "input",
            name: "install",
            message: "(Any installation instructions)"
    }, 
    {
            type: "input",
            name: "usage",
            message: "(Any usage Info?)"
     }, 
    {
            type: "input",
            name: "test",
            message: "(Test instructions?) "
    },
    {
            type: "input",
            name: "username",
            message: "(GitHub username)"
     },
    {
            type: "input",
            name: "email",
            message: "(Enter you email address) "
    },
    {
            type: "list",
            name: "license",
            choices: ["license 1" , "license 2", "license 3"],
            message: "(What licenses were used)"
        },
    
    ]);
}
function generateMarkdown(response) {
return`
# ${response.title}
## Description
${response.description}
## Table of Contents
Install Intructions
Usage Information
Testing Information
Contributers
Questions/Contact
Licenses
## Installation Instructions
${response.install}

## Usage guidelines
${response.usage}

## Testing Instructions
${response.contribution}

## Contributers:
${response.test}

## Github
Here's the github REPO: Go to GitHub(https://github.com/${response.username})

## License's used
 ${response.license}

Questions? Contact me!: 
${response.email}
`;
}
 promptUser()
.then(function(response) {
    const md = generateMarkdown(response);
    return writeFileAsync("README.md", md);
})
.then(function() {
    console.log("You successfully created a README.");
})
.catch(function(err) {
    console.log(err);
    init()
});;;;
