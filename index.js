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
    // console.log(response.license);

    // makeBadge(response.license);

    writeToFile("README.md", generateMarkdown({...response}));
    });    
}

// function to make a badges for licenses.
// function makeBadge(data) {
//     // console.log(data);
//     // console.log(typeof data); 
//     // console.log(JSON.stringify(data));
//     // put them in a array
//     const license = data; 
//     license.forEach(function(answer) {
//         if (answer == "MIT") {
//             // console.log("this is MIT");
//             const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//             writeToFile("README.md", generateMarkdown(MIT));
//             console.log(answer);
//         }
//         else if (answer == "ISC") {
//             console.log("this is ISC");
//             writeToFile("README.md", generateMarkdown(answer));
//             console.log(answer);
//         }
//         else if (answer == "Apache 2.0") {
//             console.log("this is Apache 2.0");
//             writeToFile("README.md", generateMarkdown(answer));
//             console.log(answer);
//         }
//         else {
//             return;
//         }
//     });
//     // writeToFile("README.md", generateMarkdown(data));
//     console.log("This function is working");
    
// }

// function call to initialize program
init();
