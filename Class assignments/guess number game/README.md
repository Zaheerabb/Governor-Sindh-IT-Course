# Guess-A-Number Game

🎮 Welcome to **Guess-A-Number**! This is a simple command-line game where you try to guess a randomly selected number within a specified range.

## Features

🔢 Three levels of difficulty: Easy, Medium, and Hard.  
🎲 Three game formats: 1-10, 1-50, and 1-100.  
🎯 Customizable number of guesses based on the chosen difficulty level.  
💻 Interactive command-line interface using the `inquirer` package.  
🌈 Colorful output using the `chalk` package.

## How to Play

1. Clone the repository to your local machine.
2. Make sure you have Node.js installed.
3. Navigate to the directory containing the game files.
4. Run `npm install` to install dependencies.
5. Run `npm start` to start the game.

## Game Rules

🧠 Select a difficulty level: Easy (10 guesses), Medium (6 guesses), or Hard (4 guesses).  
🔍 Choose a game format: 1-10, 1-50, or 1-100.  
💡 Guess the randomly selected number within the allowed number of attempts.  
🔊 After each guess, you will receive hints about whether the actual number is greater or less than your guess.  
🔚 If you run out of guesses, the game ends, and the actual number is revealed.  
🔄 You can choose to continue playing or exit the game after each round.

## Technologies Used

🔧 Node.js  
📋 Inquirer.js  
🖍️ Chalk

## Code Explanation

The game is implemented as a Node.js script using `inquirer` for CLI interactions and `chalk` for colorizing the output. It utilizes a do-while loop to allow continuous play until the player decides to exit. The game offers options to choose difficulty levels and game formats, generates a random number based on the selected range, and prompts the player to guess the number within the given number of attempts.

## Contributors

- [Zaheer Abbas]

## License

This project is licensed under the [MIT License](LICENSE).
