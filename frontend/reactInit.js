import { exec } from "child_process";
import chalk from "chalk";
import { input, select } from "@inquirer/prompts";

export default async function reactInit() {
  const initReact = await select({
    message:
      "Would you like to initialize a React project with Vite (React Router)?\n If no, this will initialize a React project with Create React App.",
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
  return;
}
