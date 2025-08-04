import runCommand from "../utils/runCommand.js";
import { input } from "@inquirer/prompts";

export default async function nextInit() {
  const nextAppName = await input({
    message: "What would you like to name your Next.js app?",
    default: "my-next-app",
  });

  console.log("Initializing Next.js project with Next CLI...");
  await runCommand(
    "npx",
    ["create-next-app", nextAppName],
    "Successfully initialized Next.js project.",
  );
}
