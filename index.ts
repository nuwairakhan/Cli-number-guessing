#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 5 + 1 );
// console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please guess a number between 1-5:",
    }
]);

if (answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You are guessed a right number.");
}  else {
    console.log("Oops! You guessed a wrong number.");
}