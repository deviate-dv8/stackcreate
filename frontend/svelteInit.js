import runCommand from "../utils/runCommand.js";

export default async function svelteInit() {
  await runCommand(
    "npx",
    ["sv", "create"],
    "Successfully initialized Svelte project.",
  );
}
