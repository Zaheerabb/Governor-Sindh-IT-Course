# Calculator 🧮

This is a simple command-line calculator application that allows you to perform basic arithmetic operations and calculate Body Mass Index (BMI). 

## Features

➕➖✖️➗ Perform addition, subtraction, multiplication, and division operations.  
📏 Calculate BMI (Body Mass Index) based on height and weight.  
💻 Interactive command-line interface using the `inquirer` package.  
🌈 Colorful output using the `chalk` package.

## How to Use

1. Clone the repository to your local machine.
2. Make sure you have Node.js installed.
3. Navigate to the directory containing the calculator files.
4. Run `npm install` to install dependencies.
5. Run `npm start` to start the calculator.

## Calculator Modes

🔢 **Normal Calculator**: Perform arithmetic operations on two numbers.  
🏋️ **BMI Calculator**: Calculate BMI based on height and weight.

## Normal Calculator

1. Enter the first number.
2. Enter the second number.
3. Choose a mathematical operator: addition (+), subtraction (-), multiplication (*), or division (/).
4. View the result.

## BMI Calculator

1. Enter your height in meters.
2. Enter your weight in kilograms.
3. View your calculated BMI.

## Technologies Used

🔧 Node.js  
📋 Inquirer.js  
🖍️ Chalk

## Code Explanation

The calculator is implemented as a Node.js script using `inquirer` for CLI interactions and `chalk` for colorizing the output. It presents the user with options to choose between a normal calculator and a BMI calculator. Depending on the choice, it prompts the user for relevant inputs and performs the necessary calculations, displaying the result in a colorful format.

## Contributors

- [Zaheer Abbas]

## License

This project is licensed under the [MIT License](LICENSE).
