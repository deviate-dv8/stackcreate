import { select, Separator } from "@inquirer/prompts";
import chalk from "chalk";
import expressInit from "./unopinionated/expressInit.js";
import fastifyInit from "./unopinionated/fastifyInit.js";
import nestInit from "./opinionated/nestInit.js";
import adonisInit from "./opinionated/adonisInit.js";

export default async function backEndInit() {
  console.log(chalk.red("You selected Backend!"));
  const answerBackend = await select({
    message: "Which backend framework would you like to use?",
    default: "express",
    loop: false,
    choices: [
      new Separator("Unopinionated Frameworks"),
      { value: "express", name: "Express.js" },
      { value: "fastify", name: "Fastify" },
      new Separator("Opinionated Frameworks"),
      { value: "nest", name: "NestJS" },
      { value: "adonis", name: "AdonisJS" },
    ],
  });

  switch (answerBackend) {
    case "express":
      console.log(chalk.white("Initializing Express.js project..."));
      await expressInit();
      break;
    case "fastify":
      console.log(chalk.green("Initializing Fastify project..."));
      await fastifyInit();
      break;
    case "nest":
      console.log(chalk.green("Initializing NestJS project..."));
      await nestInit();
      break;
    case "adonis":
      console.log(chalk.green("Initializing AdonisJS project..."));
      await adonisInit();
      break;
  }
}
