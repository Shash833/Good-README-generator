const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")
const writeREADME = util.promisify(fs.writeFile);

//User questions
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on usage of your project:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide instructions for any contributers:",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test details:"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide licensing details:"
    },
    {
        type: "checkbox",
        name: "languages",
        message: "Which of the languages were used in your project?",
        choices: ["HTML", "CSS", "Javascript", "Python", "C", "Others"]
    }

];

//function to prompt user with questions
function promptUser() {
    return inquirer.prompt(questions);
}

//Initialise - prompt user with questions and generate README
async function init() {
    try {
        const answers = await promptUser(questions)
        const README = await generateMarkdown(answers);
        await writeREADME("README.md", README);
        console.log("Success!");
    }
    catch (error) {
        console.log(error);
    };
}

init();
