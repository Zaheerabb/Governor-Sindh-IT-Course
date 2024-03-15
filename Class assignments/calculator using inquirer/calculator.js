#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const inquirer_1 = __importDefault(require("inquirer"));
// if input is null or other than a number then call this function
function checkValidate(answer) {
    if (!answer) {
        return "please enter a number";
    }
    return true;
}
let x;
do {
    // choose calculator type (normal or BMI)
    let chooseCalculator = await inquirer_1.default.prompt([
        {
            name: "calType",
            type: "list",
            choices: ["Normal calculator", "BMI calculator"],
            message: "Choose calculator type:",
        },
    ]);
    // if calculator type is Normal 
    if (chooseCalculator.calType == "Normal calculator") {
        // enter first number
        let input1 = await inquirer_1.default.prompt([
            {
                name: "num1",
                type: "number",
                message: chalk_1.default.bgBlueBright("enter 1st number:"),
                validate: checkValidate,
            },
            // enter second number
            {
                name: "num2",
                type: "number",
                message: chalk_1.default.bgBlueBright("enter 2nd number:"),
                validate: checkValidate
            },
            // enter mathmatical operator
            {
                name: "operators",
                type: "list",
                choices: ["+", "-", "*", "/"],
                message: chalk_1.default.bgBlueBright("choose operator: "),
            },
        ]);
        let solved = 0;
        let op = " ";
        switch (input1.operators) {
            case "+":
                solved = input1.num1 + input1.num2;
                op = "+";
                break;
            case "-":
                solved = input1.num1 - input1.num2;
                op = "-";
                break;
            case "*":
                solved = input1.num1 * input1.num2;
                op = "*";
                break;
            case "/":
                solved = input1.num1 / input1.num2;
                op = "/";
                break;
            default:
                break;
        }
        console.log(`  ${input1.num1} ${op} ${input1.num2} = ${chalk_1.default.bold.greenBright(solved)}`);
    }
    // If calculator type is BMI
    else {
        let input1 = await inquirer_1.default.prompt([
            {
                name: "height",
                type: "number",
                message: chalk_1.default.bgBlueBright("enter your height in meters:"),
                validate: checkValidate
            },
            {
                name: "weight",
                type: "number",
                message: chalk_1.default.bgBlueBright("enter your weight in kg:    "),
                validate: checkValidate
            }
        ]);
        console.log(chalk_1.default.bold.greenBright(input1.weight / (input1.height * input1.height)));
    }
    x = await inquirer_1.default.prompt({
        name: "y",
        type: "list",
        choices: ["continue", "exit"],
        message: "do you want to continue or exit?"
    });
} while (x.y == "continue");
