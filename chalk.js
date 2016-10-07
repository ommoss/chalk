var chalk = require("chalk");

var message = "Hello " + chalk.yellow.bgRed.cyan.strikethrough("World");
console.log(message);