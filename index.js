const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown.js");
const fs = require("fs");




// array of questions for user
const questions = [
    {
        type: "input",
        message: "Please enter your Github username.",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your E-mail address.",
        name: "email"
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter a brief description of your project",
        name: "desc"
    },
    {
        type: "input",
        message: "Please describe how to install this project.",
        name: "install"
    },
    {
        type: "input",
        message: "Please describe how to test this project.",
        name: "test"
    },
    {
        type: "input",
        message: "Please enter your contribution guidelines",
        name: "contribute"
    },
    {
        type: "input",
        message: "Please describe how user can use this repo.",
        name: "repouse"
    },
    {
        type: "input",
        message: "Please describe how user can contribute to the repo.",
        name: "repocon"
    },
    {
        type: "list",
        message: "license here", // add license question
        choices: ["MIT", "ISC", "Apache 2.0", "None"], // list of licenses
        name: "licence"
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
    console.log(response);
    writeToFile("README.md", generateMarkdown({...response}));
    });    
}

// function call to initialize program
init();
