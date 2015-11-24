#! /usr/bin/env node

"use strict";

// IMPORTS
// ---------------------------------
var commands = require("./lib/commands");
var chalk = require("chalk");
require("shelljs/global")

// COMMANDS
// ---------------------------------
var args = process.argv.slice(2);

switch (args[0]) {
    case undefined:
        commands.new();
        break;
    case "new":
        commands.new();
        break;
    case "--help":
        commands.help();
        break;
    case "-h":
        commands.help();
        break;
    case "watch":
        // console.log(chalk.red("Watch command!"));
        if (!which("gulp")) {
            echo("Sorry, this script requires gulp. Run 'npm install --global gulp'");
            exit(1);
        }
        exec("gulp watch");
        break;
    case "build":
        console.log(chalk.red("Build command!"));
        break;
    default:
        console.log(chalk.red("Invalid command!"));
}
