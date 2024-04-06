#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let amount = 0;
console.log(chalk_1.default.bgRedBright.bold("\t  WELCOME TO ATM  \t"));
// showing pin to users
console.log(chalk_1.default.green.bold("pin: 1234\t"));
// asking for pin from user
let pin = await inquirer_1.default.prompt({
    name: "pin",
    type: "number",
    message: chalk_1.default.bgBlueBright("  Enter your pin:  "),
});
// if pin is correct
if (pin.pin == 1234) {
    let withAgain;
    do {
        // asking for current,savings or niether
        let sav_curr = await inquirer_1.default.prompt({
            name: "s_c",
            type: "list",
            message: chalk_1.default.bgBlueBright("   Choose option   "),
            choices: ["current", "savings"],
        });
        // if user choose current
        if (sav_curr.s_c == "current") {
            // storing current amount and loging that amount
            amount = 40000;
            console.log(`\nYour total current amount is: ${chalk_1.default.bgGreen(amount)}`);
            // asking for amount that user want to withdraw
            let withdrawAmount = await inquirer_1.default.prompt({
                name: "amount",
                type: "list",
                message: chalk_1.default.bgBlueBright("   choose amount   "),
                choices: ["50000", "25000", "20000", "10000", "5000"]
            });
            if (withdrawAmount.amount > amount) {
                console.log(chalk_1.default.bgRed.bold("\n insuficient balance \n"));
            }
            else {
                amount -= withdrawAmount.amount;
                console.log(`\n${chalk_1.default.bgBlue.bold("\t Withdraw Complete ")} --> Balance remains: ${chalk_1.default.bgGreen(amount)} \n`);
            }
        }
        // if user choose savings
        else if (sav_curr.s_c == "savings") {
            amount = 35000;
            console.log(`\nYour total savings amount is: ${chalk_1.default.bgGreen(amount)}`);
            // asking for amount that user want to withdraw
            let withdrawAmount = await inquirer_1.default.prompt({
                name: "amount",
                type: "list",
                message: chalk_1.default.bgBlueBright("   choose amount   "),
                choices: ["50000", "25000", "20000", "10000", "5000"]
            });
            if (withdrawAmount.amount > amount) {
                console.log(chalk_1.default.bgRed.bold(" insuficient balance "));
            }
            else {
                amount -= withdrawAmount.amount;
                console.log(`${chalk_1.default.bgBlue.bold("\t Withdraw Complete ")} --> Balance remains: ${chalk_1.default.bgGreen(amount)} \n`);
            }
        }
        // 20
        // asking to user if he wants to withdraw again
        withAgain = await inquirer_1.default.prompt({
            name: "again",
            type: "list",
            message: chalk_1.default.bgBlueBright(" do you want to withdraw again? "),
            choices: ["YES", "NO"]
        });
        if (withAgain.again == "NO") {
            console.log(chalk_1.default.bold.bgCyan("\t\n Thankyou for using our ATM. Have a nice day \n"));
        }
    } while (withAgain.again != "NO");
    // if pin is incorrect
}
else {
    console.log(chalk_1.default.bgRed.bold("\n Incorrect pin \n"));
}
