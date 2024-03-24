#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let noOFGuess = 0;
let random: number = 0;
let exitAndPlay;

//Heading
console.log(chalk.bgGreenBright("\t\t WELCOME TO GUESS-A-NUMBER "));

do {
  // choosing game level's (easy medium hard)
  let gamelevel = await inquirer.prompt({
    name: "level",
    type: "list",
    message: "choose level",
    choices: ["Easy (guesses 10)", "Medium (guesses 6)", "Hard (guesses 4)"],
  });
  if (gamelevel.level == "Easy (guesses 10)") {
    // if level is easy then number of guesses 10
    noOFGuess = 10;
  } else if (gamelevel.level == "Medium (guesses 6)") {
    // if level is medium then number of guesses 6
    noOFGuess = 6;
  } else {
    noOFGuess = 4; // if level is hard then number of guesses 4
  }

  // choosing game formats (1-10, 1-50, 1-100)
  gamelevel = await inquirer.prompt({
    name: "level",
    type: "list",
    message: "want to guess between",
    choices: ["1-10", "1-50", "1-100"],
  });
  if (gamelevel.level == "1-10") {
    random = Math.floor(Math.random() * 10 + 1); // if format is 1-10 then random number is between 10 and 1
  } else if (gamelevel.level == "1-50") {
    random = Math.floor(Math.random() * 50 + 1); // if format is 1-50 then random number is between 50 and 1
  } else {
    random = Math.floor(Math.random() * 100 + 1); // if format is 1-100 then random number is between 100 and 1
  }

  // GAME START
  console.log(
    chalk.bold.bgBlue(
      `\n Guess a number between ${chalk.green(
        gamelevel.level
      )} \n You have total ${chalk.red(noOFGuess)} guesses to guess a number\n`
    )
  );
  do {
    let guess = await inquirer.prompt({
      name: "numGuess",
      type: "number",
      message: chalk.bgBlueBright(" Please guess a number: "),
    });
    if (guess.numGuess == random) {
      console.log(
        chalk.bgGreen("\n Congratulations, You guessed a right number \n")
      );
      break;
    } else if (guess.numGuess < random) {
      noOFGuess--;
      console.log(
        ` -> You guessed a wrong number\n ${chalk.green(
          "HINT"
        )}: number is greator then ${guess.numGuess} \t ${chalk.bgRed(
          " ",
          noOFGuess,
          " "
        )}\n`
      );
    } else {
      noOFGuess--;
      console.log(
        ` -> You guessed a wrong number\n ${chalk.green(
          "HINT"
        )}: number is less then ${guess.numGuess} \t\t ${chalk.bgRed(
          " ",
          noOFGuess,
          " "
        )}\n`
      );
    }
  } while (noOFGuess != 0);

  if (noOFGuess == 0) {
    console.log(chalk.bold.bgRedBright(`\n\t GAME OVER `));
    console.log(chalk.bold.bgRed(`\n\n\t Number was ${random} \n`));
  }

  exitAndPlay = await inquirer.prompt({
    name: "play",
    type: "list",
    message: "want to: ",
    choices: ["exit", "contiue"],
  });
} while (exitAndPlay.play != "exit");
