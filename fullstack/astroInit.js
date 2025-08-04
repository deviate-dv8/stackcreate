import runCommand from "../utils/runCommand.js";
import { input } from "@inquirer/prompts";

export default async function astroInit() {
  const astroAppName = await input({
    message: "What would you like to name your Astro.js app?",
    default: "my-astro-app",
  });

  console.log("Initializing Astro.js project with Astro CLI...");
  await runCommand(
    "npm",
    ["create", "astro@latest", astroAppName],
    "Successfully initialized Astro.js project.",
  );
}
