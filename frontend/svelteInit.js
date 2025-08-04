import { spawn } from "child_process";
import chalk from "chalk";
import { input, select } from "@inquirer/prompts";
import runCommand from "../utils/runCommand.js";

export default async function svelteInit() {
  await runCommand(
    "npx",
    ["sv", "create"],
    "Successfully initialized Svelte project.",
  );
}
