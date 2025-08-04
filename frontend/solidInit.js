import runCommand from "../utils/runCommand.js";
import { input, select } from "@inquirer/prompts";
export default async function solidInit() {
  const solidAppName = await input({
    message: "What would you like to name your Solid app?",
    default: "my-solid-app",
  });
  const typeScriptSupport = await select({
    message: "Would you like to use TypeScript?",
    default: "yes",
    choices: [
      { value: "yes", name: "Yes" },
      { value: "no", name: "No" },
    ],
  });
  await runCommand(
    "npm",
    [
      "create",
      "vite@latest",
      solidAppName,
      "--",
      "--template",
      `${typeScriptSupport === "yes" ? "solid-ts" : "solid"}`,
    ],
    "Successfully initialized Solid project.",
  );
}
