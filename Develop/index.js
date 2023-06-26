// allows use of file system
const fs = require("fs")
// installs inquirer
const inquirer = require("inquirer");
// allows link to other .js file (generateMarkdown.js) that has write function
const genMarkdown = require("./utils/generateMarkdown.js")
// prompt questions with choices
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "ReadMe Title:",
    },
    {
        type: 'input',
        name: 'description',
        message: "ReadMe Description:",
    },
    {
        type: 'input',
        name: 'tableofcontents',
        message: "Table of Contents:",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Installation:",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Usage:",
    },
    {
        type: 'list',
        name: 'license',
        message: "What license would you like?",
        choices: ["MIT", "AGP", "GPL", "none",]
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Contributing:",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Tests:",
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter GitHub username:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter email address:",
    },


];

// function that sends data from questions to function in other JS file (generateMarkdown.js) and writes new mark down file 
inquirer.prompt(questions)
.then((data) => {
const readMe = genMarkdown(data);
fs.writeFile('README.md', readMe, (err) =>
err ? console.log(err) : console.log('success!'))
});
function init() {}
init();
