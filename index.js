#!/usr/bin/env node

import chalk from "chalk";
import { select, input } from "@inquirer/prompts";
import { exec } from "child_process";
import reactInit from "./frontend/react.js";
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
    console.log(chalk.blue("You selected Frontend!"));
    const answerFrontend = await select({
      message: "Which frontend framework would you like to use?",
      default: "react",
      choices: [
        { value: "react", name: "React" },
        { value: "vue", name: "Vue" },
        { value: "angular", name: "Angular" },
        { value: "svelte", name: "Svelte" },
        { value: "solid", name: "Solid" },
        { value: "vite", name: "Initalize with Vite" },
      ],
    });
    console.log(chalk.green(`You selected ${answerFrontend}!`));
    if (answerFrontend === "react") {
      await reactInit();
    }
    // Here you would call the function to create the frontend stack

    break;
  case "backend":
    break;
  case "fullstack":
    break;
  default:
    console.error(chalk.red("Invalid option selected."));
    process.exit(1);
}
