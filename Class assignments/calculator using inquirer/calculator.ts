import inquirer from "inquirer";

// choose calculator type (normal or BMI)
let chooseCalculator = await inquirer.prompt([
  {
    name: "calType",
    type: "list",
    choices: ["Normal calculator", "BMI calculator"],
    message: "Choose calculator type:",
    validate: (answer) => {
      if (!answer) {
        return "please choose calculator";
      }
      return true;
    },
  },
]);

// if calculator type is Normal 
if (chooseCalculator.calType == "Normal calculator") {

    // enter first number
  let input1 = await inquirer.prompt([
    {
      name: "num1",
      type: "number",
      message: "enter 1st number:",
      validate: (answer) => {
        if (!answer) {
          return "please enter a number";
        }
        return true;
      },
    },

    // enter second number
    {
      name: "num2",
      type: "number",
      message: "enter 2nd number:",
      validate: (answer) => {
        if (!answer) {
          return "please enter a number";
        }
        return true;
      },
    },

    // enter mathmatical operator
    {
      name: "operators",
      type: "list",
      choices: ["+", "-", "*", "/"],
      message: "choose operator:",
      validate: (answer) => {
        if (!answer) {
          return "please enter an operator";
        }
        return true;
      },
    },
  ]);

  let solved: number = 0;
  let op: string = " ";
  
  if (input1.operators == "+") {
    solved = input1.num1 + input1.num2;
    op = "+";
  } else if (input1.operators == "-") {
    solved = input1.num1 - input1.num2;
    op = "-";
  } else if (input1.operators == "*") {
    solved = input1.num1 * input1.num2;
    op = "*";
  } else {
    solved = input1.num1 / input1.num2;
    op = "/";
  }
  console.log(`${input1.num1} ${op} ${input1.num2} = ${solved}`);

}
// If calculator type is BMI
 else {
    let input1 = await inquirer.prompt([
        {
          name: "height",
          type: "number",
          message: "enter your height in meters:",
          validate: (answer) => {
            if (!answer) {
              return "please enter your height";
            }
            return true;
          },
        },
        {
          name: "weight",
          type: "number",
          message: "enter your weight in kg:",
          validate: (answer) => {
            if (!answer) {
              return "please enter your weight";
            }
            return true;
          },
        }
    ])

    console.log(input1.weight/(input1.height * input1.height));
      
}
