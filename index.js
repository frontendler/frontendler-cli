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
        exec("gulp watch");
        break;
    case "build":
        console.log(chalk.red("Build command!"));
        break;
    default:
        console.log(chalk.red("Invalid command!"));
}
