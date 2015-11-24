var chalk = require("chalk");
var inquirer = require("inquirer");
var version = require("../package.json").version;
require("shelljs/global");

exports.help = function() {

    // HELP
    // ---------------------------------
    console.log("");
    console.log("");
    console.log("Frontendler. The responsive development kit.");
    console.log("=============================================")
    console.log("vesion:" + version);
    console.log("");
    console.log("");
    console.log("Usage: frontendler <command>");
    console.log("");
    console.log("");
    console.log("Options: [new]");
    console.log("new  -->  Create new app");
}

exports.new = function() {

    // WELCOME
    // ---------------------------------
    console.log("");
    console.log("");
    console.log(chalk.cyan("Welcome to Frontendler!"));
    console.log(chalk.cyan("========================="))
    console.log(chalk.gray("vesion:" + version));
    console.log("");
    console.log("");

    // QUESTIONS
    // ---------------------------------
    var questions = [{
        type: "input",
        name: "name",
        message: "What's your app name?",
        validate: function(value) {
            var pass = (typeof value === "string" && value.length > 0)
            if (pass) {
                return true;
            } else {
                return "Please enter a valid app name!";
            }
        }
    }, {
        type: "list",
        name: "template",
        message: "What template you want to use?",
        choices: ["Jade", "React", "HTML"],
        filter: function(val) {
            return val.toLowerCase();
        }
    }];

    // PROMPT
    // ---------------------------------
    inquirer.prompt(questions, function(answers) {

        //verify if exist git
        if (!which("git")) {
            echo("Sorry, this script requires git");
            exit(1);
        }

        // Use user feedback for... whatever!!
        console.log(JSON.stringify(answers, null, "  "));
        console.log(chalk.cyan("Thank you!"));
        console.log(chalk.cyan("Now i will create ", chalk.underline.yellow(answers.name), " starter kit for you."));
        console.log(chalk.yellow("Wait a minute..."));
    });
}
