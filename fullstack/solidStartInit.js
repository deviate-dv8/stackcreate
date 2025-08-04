import runCommand from "../utils/runCommand.js";
import { input } from "@inquirer/prompts";
export default async function solidStartInit() {
  const solidAppName = await input({
    message: "What would you like to name your SolidStart app?",
    default: "my-solid-start-app",
  });
  await runCommand(
    "npx",
    ["create-solid@latest", solidAppName, "--solidstart"],
    "Successfully initialized SolidStart project.",
  );
}
