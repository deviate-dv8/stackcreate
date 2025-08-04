import runCommand from "../utils/runCommand.js";
import { input } from "@inquirer/prompts";
export default async function svelteInit() {
  const svelteAppName = await input({
    message: "What would you like to name your Svelte app?",
    default: "my-svelte-app",
  });
  await runCommand(
    "npx",
    ["sv", "create", svelteAppName, "--template", "library"],
    "Successfully initialized Svelte project.",
  );
}
