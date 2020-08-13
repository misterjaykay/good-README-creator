const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");




// array of questions for user
const questions = [
    {
        type: "input",
        message: "Please enter your Github username.",
        name: "github",
        default: "Your github username"
    },
    {
        type: "input",
        message: "Please enter your E-mail address.",
        name: "email",
        default: "Your e-mail"
    },
    {
        type: "input",
        message: "Please enter your repo name.",
        name: "repo",
        default: "Your github repo name"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "Ex. Sample Title"
    },
    {
        type: "input",
        message: "Please enter a brief description of your project",
        name: "desc",
        default: "Ex. This is sample description for my project."
    },
    {
        type: "input",
        message: "Please describe how to install this project.",
        name: "install",
        default: "npm install"
    },
    {
        type: "input",
        message: "Please describe how to test this project.",
        name: "test",
        default: "npm test"
    },
    {
        type: "input",
        message: "What is the usage for this project?",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter your contribution guidelines.",
        name: "contribute"
    },
    {
        type: "checkbox",
        message: "Add licenses to your project.", // add license question
        choices: ["MIT", "ISC", "Apache 2.0", "None"], // list of licenses
        name: "license"
    }

]



// function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data) 
    
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {

    writeToFile("README.md", generateMarkdown({...response}));
    });    
}


// function call to initialize program
init();
