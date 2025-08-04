import { spawn } from "child_process";
import chalk from "chalk";

export default function runCommand(command, args) {
  const child = spawn(command, args, { stdio: "inherit" });

  child.on("error", (error) => {
    console.error(chalk.red(`Error: ${error.message}`));
  });

  child.on("close", (code) => {
    if (code !== 0) {
      console.error(chalk.red(`Process exited with code ${code}`));
    } else {
      console.log(chalk.green("Process completed successfully."));
    }
  });
}
