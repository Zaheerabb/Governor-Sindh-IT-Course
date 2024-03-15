import inquirer from "inquirer";
let input1  = await inquirer.prompt([
    {
        name : "num1",
        type: "number",
        message: "enter 1st number:",
        validate:(answer)=>
        {
            if (!answer) {
                return "please enter a number"
            }
            return true;
        }
    },
    {
        name : "num2",
        type: "number",
        message: "enter 2nd number:",
        validate:(answer)=>
        {
            if (!answer) {
                return "please enter a number"
            }
            return true;
        }
    },
    {
        name : "operators",
        type: "list",
        choices:["+","-","*","/"],
        message: "choose operator:",
        validate:(answer)=>
        {
            if (!answer) {
                return "please enter an operator"
            }
            return true;
        }
    }
])

let solved:number = 0;
let op:string = " ";
if (input1.operators == "+") {
    solved = input1.num1 + input1.num2;
    op = "+";
}
else if (input1.operators == "-") {
    solved = input1.num1 - input1.num2;
    op = "-";
}
else if (input1.operators == "*") {
    solved = input1.num1 * input1.num2;
    op = "*";
}
else {
    solved = input1.num1 / input1.num2;
    op = "/";
}
console.log(`${input1.num1} ${op} ${input1.num2} = ${solved}`);