var chalk = require("chalk");

var message = "Hello " + chalk.yellow("Mushroom World");

var unicorn = "unicorn has a tail with " + chalk.red("r") + chalk.red("a") + 
chalk.yellow("i") + chalk.green("n") + chalk.blue("b") + chalk.magenta("o") + 
chalk.magenta("w") + " color";

console.log(unicorn);
console.log(message);