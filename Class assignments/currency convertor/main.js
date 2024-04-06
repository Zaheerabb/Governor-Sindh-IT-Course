#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright.bgGreen.bold.bold("\t  WELCOME TO CURRENCY CONVERTOR  "));
let exitContinue;
do {
    let user_answer = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            message: chalk.magentaBright.bold.italic.bold("Which currency do you want to convert"),
            choices: ["USD", "EURO", "PKR", "INR"]
        },
        {
            name: "to",
            type: "list",
            message: chalk.magentaBright.bold.italic.bold("currency convert to"),
            choices: ["USD", "EURO", "PKR", "INR"]
        },
        {
            name: "amount",
            type: "number",
            message: chalk.magentaBright.bold.italic.bold("Enter amount that you want to convert"),
        }
    ]);
    const currency = {
        USD: 1, // base amount
        EURO: 0.91,
        PKR: 280,
        INR: 74.57
    };
    if (!user_answer.amount) {
        console.log(chalk.bgRedBright("\t Sorry we can't convert, Amount is NULL "));
    }
    else {
        console.log(convert());
    }
    function convert() {
        let baseCurren = user_answer.amount / currency[user_answer.from];
        let converted_amount = baseCurren * currency[user_answer.to];
        return chalk.bgGreenBright(`  ${(converted_amount).toFixed(2)} ${user_answer.to}  `);
    }
    exitContinue = await inquirer.prompt({
        name: "exit",
        type: "list",
        message: chalk.magentaBright.bold.italic.bold("Do you want to exit or continue"),
        choices: ["Continue", "Exit"]
    });
} while (exitContinue.exit != "Exit");
