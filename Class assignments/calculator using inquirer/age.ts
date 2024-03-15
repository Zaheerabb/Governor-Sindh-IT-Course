#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

// if input is null or other than a number then call this function
function checkValidate(answer:number) {
        if (!answer) {
          return "please enter a number";
        }
        return true;
}
let x
do {
  
  // choose calculator type (normal or BMI)
  let chooseCalculator = await inquirer.prompt([
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
    let input1 = await inquirer.prompt([
      {
        name: "num1",
        type: "number",
        message: chalk.bgBlueBright("enter 1st number:"),
        validate: checkValidate,
      },
      
      // enter second number
      {
        name: "num2",
        type: "number",
        message: chalk.bgBlueBright("enter 2nd number:"),
        validate: checkValidate
      },
      
      // enter mathmatical operator
      {
        name: "operators",
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: chalk.bgBlueBright("choose operator: "),
      },
    ]);
    
    let solved: number = 0;
    let op: string = " ";
    
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
              console.log(`  ${input1.num1} ${op} ${input1.num2} = ${chalk.bold.greenBright(solved)}`);
              
            }
            // If calculator type is BMI
            else {
              let input1 = await inquirer.prompt([
                {
                  name: "height",
                  type: "number",
                  message: chalk.bgBlueBright("enter your height in meters:"),
                  validate: checkValidate
                },
                {
                  name: "weight",
                  type: "number",
                  message: chalk.bgBlueBright("enter your weight in kg:    "),
                  validate: checkValidate
                }
              ])
              
              console.log(chalk.bold.greenBright(input1.weight/(input1.height * input1.height)));
            }
            x = await inquirer.prompt({
            name: "y",
              type: "list",
              choices:["continue","exit"],
              message: "do you want to continue or exit?"
            })
          } while (x.y == "continue");
          