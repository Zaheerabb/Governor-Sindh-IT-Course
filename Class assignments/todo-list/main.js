#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
// heading
console.log(chalk_1.default.bgRedBright.bold("\t  WELCOME TO toDo  \t\n"));
let listt = []; // empty aray list 
// condition for dowhile loop, if condi is true means continue and if condi  is false then exit
let condi = true;
do {
    // asking to user what he want to do
    let todo = await inquirer_1.default.prompt({
        name: "wantTo",
        type: "list",
        message: chalk_1.default.bgCyan(" What you want to do: "),
        choices: ["Add todo", "Update list-todo", "delete list-todo", "check List", "exit"]
    });
    console.log(" ");
    // if he wants exit then rediclare condi to false
    if (todo.wantTo == "exit") {
        condi = false;
    }
    // if he wants to add then run this if statement
    else if (todo.wantTo == "Add todo") {
        let add_todo;
        do {
            // asking to user to add todo
            add_todo = await inquirer_1.default.prompt({
                name: "add",
                type: "input",
                message: chalk_1.default.bgCyan("   Add todo:  "),
            });
            console.log(" ");
        } while (!(add_todo === null || add_todo === void 0 ? void 0 : add_todo.add));
        // if he adds multiple todos at a time then split the todos
        let spil = add_todo.add.split(' ');
        // if todos are more then 1
        if (spil.length > 1) {
            for (let i = 0; i < spil.length; i++) {
                listt = listt.concat([spil[i]]);
            }
        }
        else {
            listt.push(add_todo.add);
        }
    }
    // if user wants to checklist 
    else if (todo.wantTo == "check List") {
        for (let i = 0; i < listt.length; i++) {
            console.log(chalk_1.default.greenBright.bold(` -${listt[i]} `));
        }
        console.log(" ");
    }
    // if user wants to update list
    else if (todo.wantTo == "Update list-todo") {
        if (listt.length > 0) {
            let update_todo = await inquirer_1.default.prompt({
                name: "update",
                type: "list",
                message: chalk_1.default.bgCyan(" Which todo you want to update: "),
                choices: listt
            });
            let update_todo2;
            do {
                update_todo2 = await inquirer_1.default.prompt({
                    name: "update2",
                    type: "input",
                    message: chalk_1.default.bgCyan(" update: "),
                });
            } while (!update_todo2.update2);
            let x = listt.indexOf(update_todo.update);
            listt[x] = update_todo2.update2;
            console.log(chalk_1.default.bgGreenBright.bold("\t list is succesfully Updated \n"));
        }
        else {
            console.log(chalk_1.default.bgRed(" your list is empty that's why you can't update it \n"));
        }
    }
    // if user want o delete todo from list
    else {
        if (listt.length > 0) {
            let delete_todo = await inquirer_1.default.prompt([{
                    name: "delete",
                    type: "list",
                    message: chalk_1.default.bgCyan(" Which todo you want to delete: "),
                    choices: listt,
                }
            ]);
            let itemIndex = listt.indexOf(delete_todo.delete);
            let elementsToRemove = 1;
            let removedElementsArray = listt.splice(itemIndex, elementsToRemove);
            console.log(chalk_1.default.bgGreenBright.bold("\t todo is succesfully deleted \n"));
        }
        else {
            console.log(chalk_1.default.bgRed(" your list is empty that's why you can't delete it \n"));
        }
    }
} while (condi);
