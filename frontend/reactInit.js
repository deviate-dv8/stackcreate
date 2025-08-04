import chalk from "chalk";
import { input, select } from "@inquirer/prompts";
import runCommand from "../utils/runCommand.js";
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
    const args = [
      "create-react-router@latest",
      reactAppName,
      ...(reactTypescript === "yes"
        ? []
        : ["--template", "remix-run/react-router-templates/javascript"]),
    ];
    runCommand("npx", args);
  } else {
    console.log(
      chalk.green("Initializing React project with Create React App..."),
    );
    const args = [
      "create-react-app",
      reactAppName,
      ...(reactTypescript === "yes" ? ["--template", "typescript"] : []),
    ];
    runCommand("npx", args);
  }
  return;
}
``;
