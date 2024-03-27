#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let amount = 0;
console.log(chalk.bgRedBright.bold("\t  WELCOME TO ATM  \t"));
// showing pin to users
console.log(chalk.green.bold("pin: 1234\t"));
// asking for pin from user
let pin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: chalk.bgBlueBright("  Enter your pin:  "),
});
// if pin is correct
if (pin.pin == 1234) {
    let withAgain;
    do {
        // asking for current,savings or niether
        let sav_curr = await inquirer.prompt({
            name: "s_c",
            type: "list",
            message: chalk.bgBlueBright("   Choose option   "),
            choices: ["current", "savings"],
        });
        // if user choose current
        if (sav_curr.s_c == "current") {
            // storing current amount and loging that amount
            amount = 40000;
            console.log(`\nYour total current amount is: ${chalk.bgGreen(amount)}`);
            // asking for amount that user want to withdraw
            let withdrawAmount = await inquirer.prompt({
                name: "amount",
                type: "list",
                message: chalk.bgBlueBright("   choose amount   "),
                choices: ["50000", "25000", "20000", "10000", "5000"]
            });
            if (withdrawAmount.amount > amount) {
                console.log(chalk.bgRed.bold("\n insuficient balance \n"));
            }
            else {
                amount -= withdrawAmount.amount;
                console.log(`\n${chalk.bgBlue.bold("\t Withdraw Complete ")} --> Balance remains: ${chalk.bgGreen(amount)} \n`);
            }
        }
        // if user choose savings
        else if (sav_curr.s_c == "savings") {
            amount = 35000;
            console.log(`\nYour total savings amount is: ${chalk.bgGreen(amount)}`);
            // asking for amount that user want to withdraw
            let withdrawAmount = await inquirer.prompt({
                name: "amount",
                type: "list",
                message: chalk.bgBlueBright("   choose amount   "),
                choices: ["50000", "25000", "20000", "10000", "5000"]
            });
            if (withdrawAmount.amount > amount) {
                console.log(chalk.bgRed.bold(" insuficient balance "));
            }
            else {
                amount -= withdrawAmount.amount;
                console.log(`${chalk.bgBlue.bold("\t Withdraw Complete ")} --> Balance remains: ${chalk.bgGreen(amount)} \n`);
            }
        }
        // 20
        // asking to user if he wants to withdraw again
        withAgain = await inquirer.prompt({
            name: "again",
            type: "list",
            message: chalk.bgBlueBright(" do you want to withdraw again? "),
            choices: ["YES", "NO"]
        });
        if (withAgain.again == "NO") {
            console.log(chalk.bold.bgCyan("\t\n Thankyou for using our ATM. Have a nice day \n"));
        }
    } while (withAgain.again != "NO");
    // if pin is incorrect
}
else {
    console.log(chalk.bgRed.bold("\n Incorrect pin \n"));
}
