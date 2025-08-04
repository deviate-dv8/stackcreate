import runCommand from "../utils/runCommand.js";
import { input } from "@inquirer/prompts";

export default async function nuxtInit() {
  const nuxtAppName = await input({
    message: "What would you like to name your Nuxt.js app?",
    default: "my-nuxt-app",
  });

  console.log("Initializing Nuxt.js project with Nuxt CLI...");
  await runCommand(
    "npm",
    ["create", "nuxt@latest", nuxtAppName],
    "Successfully initialized Nuxt.js project.",
  );
}
