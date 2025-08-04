import { spawn } from "child_process";
import chalk from "chalk";
import { input, select } from "@inquirer/prompts";
import runCommand from "../utils/runCommand.js";

export default async function solidInit() {
  await runCommand(
    "npm",
    ["init", "solid"],
    "Successfully initialized Solid project.",
  );
}
