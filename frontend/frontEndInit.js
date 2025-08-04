import { select } from "@inquirer/prompts";
import chalk from "chalk";
import reactInit from "./reactInit.js";
import vueInit from "./vueInit.js";
import angularInit from "./angularInit.js";
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
  switch (answerFrontend) {
    case "react":
      console.log(chalk.blue("You selected React!"));
      await reactInit();
      break;
    case "vue":
      console.log(chalk.green("You selected Vue!"));
      await vueInit();
      break;
    case "angular":
      await angularInit();
      console.log(chalk.red("You selected Angular!"));
      break;
    case "svelte":
      console.log(chalk.hex("#FFA500")("You selected Svelte!"));
      break;
    case "solid":
      console.log(chalk.blue("You selected Solid!"));
      break;
    case "vite":
      console.log(chalk.blue("You selected Vite!"));
      break;
    default:
      console.error(chalk.red("Invalid option selected."));
      process.exit(1);
  }
}
