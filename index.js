#!/usr/bin/env node

import chalk from "chalk";
import { select, input } from "@inquirer/prompts";
import { exec } from "child_process";
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
      const initReact = await select({
        message:
          "Would you like to initialize a React project with Vite?\n If no, this will initialize a React project with Create React App.",
        default: "yes",
        choices: [
          { value: "yes", name: "Yes" },
          { value: "no", name: "No" },
        ],
      });
      const reactAppName = await input({
        message: "What would you like to name your React app?",
        default: "my-app",
      });
      const reactTypescript = await select({
        message: "Would you like to use TypeScript with your React app?",
        default: "no",
        choices: [
          { value: "yes", name: "Yes" },
          { value: "no", name: "No" },
        ],
      });

      if (initReact === "yes") {
        console.log(
          chalk.green("Initializing React project with Vite (React Router)..."),
        );
        exec(
          `npx npx create-react-router@latest ${reactAppName} ${reactTypescript === "yes" ? "" : "--template remix-run/react-router-templates/javascript"}`,
          (error, stdout, stderr) => {
            if (error) {
              console.error(chalk.red(`Error: ${error.message}`));
              return;
            }
            if (stderr) {
              console.error(chalk.yellow(`Warning: ${stderr}`));
            }
            console.log(chalk.green(`Output: ${stdout}`));
          },
        );
      } else {
        console.log(
          chalk.green("Initializing React project with Create React App..."),
        );
        exec(
          `npx create-react-app ${reactAppName} ${reactTypescript === "yes" ? "--template typescript" : ""}`,
          (error, stdout, stderr) => {
            if (error) {
              console.error(chalk.red(`Error: ${error.message}`));
              return;
            }
            if (stderr) {
              console.error(chalk.yellow(`Warning: ${stderr}`));
            }
            console.log(chalk.green(`Output: ${stdout}`));
          },
        );
      }
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
