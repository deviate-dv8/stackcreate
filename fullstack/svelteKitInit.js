import runCommand from "../utils/runCommand.js";

export default async function svelteKitInit() {
  const svelteKitAppName = await input({
    message: "What would you like to name your SvelteKit app?",
    default: "my-sveltekit-app",
  });
  await runCommand(
    "npx",
    ["sv", "create", svelteKitAppName],
    "Successfully initialized SvelteKit project.",
  );
}
