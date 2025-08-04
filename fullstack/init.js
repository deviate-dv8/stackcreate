import { select, Separator } from "@inquirer/prompts";
import chalk from "chalk";
import nextInit from "./nextInit.js";
import nuxtInit from "./nuxtInit.js";
import svelteKitInit from "./svelteKitInit.js";
import solidStartInit from "./solidStartInit.js";

export default async function fullStackInit() {
  console.log(chalk.green("You selected Fullstack!"));
  const answerFullStack = await select({
    message: "Which fullstack framework would you like to use?",
    default: "nextjs",
    choices: [
      { value: "nextjs", name: "Next.js" },
      { value: "nuxtjs", name: "Nuxt.js" },
      { value: "sveltekit", name: "SvelteKit" },
      { value: "solidstart", name: "SolidStart" },
      { value: "astro", name: "Astro" },
    ],
  });
  switch (answerFullStack) {
    case "nextjs":
      console.log(chalk.white("You chose Next.js!"));
      await nextInit();
      break;
    case "nuxtjs":
      console.log(chalk.green("You chose Nuxt.js!"));
      await nuxtInit();
      break;
    case "sveltekit":
      console.log(chalk.hex("#FFA500")("You chose SvelteKit!"));
      await svelteKitInit();
      break;
    case "solidstart":
      console.log(chalk.blue("You chose SolidStart!"));
      await solidStartInit();
      break;
    case "astro":
      console.log(
        `You chose ${chalk.hex("#0D031F")("As")}${chalk.hex("#FFA500")("tro")}!`,
      );
      break;
    default:
      console.error(chalk.red("Invalid option selected."));
      process.exit(1);
  }
}
