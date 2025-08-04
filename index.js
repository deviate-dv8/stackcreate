#!/usr/bin/env node

import chalk from "chalk";
import { select } from "@inquirer/prompts";
import frontEndInit from "./frontend/init.js";
import backEndInit from "./backend/init.js";
import fullStackInit from "./fullstack/init.js";
console.clear();
console.log(
  "\
▄▖▗     ▌ ▄▖      ▗\n\
▚ ▜▘▀▌▛▘▙▘▌ ▛▘█▌▀▌▜▘█▌\n\
▄▌▐▖█▌▙▖▛▖▙▖▌ ▙▖█▌▐▖▙▖\n\
	",
);

console.log(chalk.green("Welcome to the StackCreate CLI!"));

const answer = await select({
  message: "What part of the stack would you like to create?",
  default: "frontend",
  choices: [
    { value: "frontend", name: "Frontend" },
    { value: "backend", name: "Backend" },
    { value: "fullstack", name: "Fullstack" },
  ],
});

switch (answer) {
  case "frontend":
    // Here you would call the function to create the frontend stack
    await frontEndInit();
    break;
  case "backend":
    await backEndInit();
    break;
  case "fullstack":
    await fullStackInit();
    break;
  default:
    console.error(chalk.red("Invalid option selected."));
    process.exit(1);
}
