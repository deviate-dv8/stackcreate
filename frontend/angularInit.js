import { spawn } from "child_process";
import chalk from "chalk";
import { input, select } from "@inquirer/prompts";
import runCommand from "../utils/runCommand.js";

export default async function angularInit() {
  await runCommand(
    "npm",
    ["install", "-g", "@angular/cli"],
    "Successfully installed Angular CLI globally.",
  );
  const angularAppName = await input({
    message: "What would you like to name your Angular app?",
    default: "my-angular-app",
  });
  // const angularTypescript = await select({
  //   message: "Would you like to use TypeScript with your Angular app?",
  //   default: "yes",
  //   choices: [
  //     { value: "yes", name: "Yes" },
  //     { value: "no", name: "No" },
  //   ],
  // });
  const args = [
    "new",
    angularAppName,
    // ...(angularTypescript === "yes" ? ["--defaults"] : ["--skip-install"]),
  ];
  console.log(chalk.green("Initializing Angular project with Angular CLI..."));
  await runCommand("ng", args, " Successfully initialized Angular project.");
}
