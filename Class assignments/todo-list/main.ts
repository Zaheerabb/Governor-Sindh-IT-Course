#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
// heading
console.log(chalk.bgRedBright.bold("\t  WELCOME TO toDo  \t\n"));
let listt:string[] = [] // empty aray list 
// condition for dowhile loop, if condi is true means continue and if condi  is false then exit
let condi = true  
do {
  // asking to user what he want to do
  let todo = await inquirer.prompt(
    {
      name: "wantTo",
      type: "list",
      message: chalk.bgCyan(" What you want to do: "),
      choices: ["Add todo","check List","exit"]
    });
    console.log(" ");
    
    // if he wants exit then rediclare condi to false
    if (todo.wantTo == "exit") {
      condi = false;
    }
    // if he wants to add then run this if statement
    else if (todo.wantTo == "Add todo") {
      // asking to user to add todo
      let add_todo = await inquirer.prompt(
        {
          name: "add",
          type: "input",
          message: chalk.bgCyan("   Add todo:  "),
        });
        console.log(" ");
        
        // if he adds multiple todos at a time then split the todos
        let spil = add_todo.add.split(' ')
        // if todos are more then 1
        if (spil.length > 1) {
          for (let i = 0; i < spil.length; i++) {
            listt = listt.concat([spil[i]])
          }
        } else{
          listt.push(add_todo.add)
        }
    }
    // if user wants to checklist 
    else {
      console.log(listt);
      console.log(" ");
      
    }
} while (condi);

