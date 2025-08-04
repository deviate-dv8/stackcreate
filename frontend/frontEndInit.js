import { select } from "@inquirer/prompts";
import chalk from "chalk";
import reactInit from "./reactInit.js";
export default async function frontEndInit() {
  console.log(chalk.blue("You selected Frontend!"));
  const answerFrontend = await select({
    message: "Which frontend framework would you like to use?",
    default: "react",
    choices: [
      { value: "react", name: "React" },
      { value: "vue", name: "Vue" },
      { value: "angular", name: "Angular" },
      { value: "svelte", name: "Svelte" },
      { value: "solid", name: "Solid" },
      { value: "vite", name: "Initalize with Vite" },
    ],
  });
  console.log(chalk.green(`You selected ${answerFrontend}!`));
  if (answerFrontend === "react") {
    await reactInit();
  }
}
