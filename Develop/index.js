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
        name: 'description',
        message: "ReadMe Description:",
    },
    {
        type: 'input',
        name: 'motivation',
        message: "What was your motivation?",
    },
    {
        type: 'input',
        name: 'project',
        message: "Why did you build this project?",
    },
    {
        type: 'input',
        name: 'solve',
        message: "What problem does it solve?",
    },
    {
        type: 'input',
        name: 'learn',
        message: "What did you learn?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Usage:",
    },
    {
        type: 'input',
        name: 'credits',
        message: "Credits:",
    },
    {
        type: 'list',
        name: 'license',
        message: "What license would you like?",
        choices: ["MIT", "AGP", "GPL", "none",]
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
