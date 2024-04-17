import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRedBright.bold.italic("\t WELCOME TO SIMPLE WORD COUNTER \n"));
let usrInpt2;
do {
    const usrInpt = await inquirer.prompt({
        name: "sentence",
        type: "input",
        message: chalk.bgCyanBright(" Enter sentence to count words ")
    });
    const words = usrInpt.sentence.trim().split(" ");
    const wrdslngth = chalk.bgRedBright(` ${words.length} `);
    console.log(chalk.bgGreenBright(`\n\t Your sentence contain ${wrdslngth} words \n`));
    usrInpt2 = await inquirer.prompt({
        name: "ext",
        type: "list",
        message: chalk.bgCyanBright(" want to continue or exit \n"),
        choices: ["Continue", "Exit"],
    });
} while (usrInpt2.exit == "Continue");
