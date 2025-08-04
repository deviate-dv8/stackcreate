import { select, Separator } from "@inquirer/prompts";
import chalk from "chalk";
import expressInit from "./unopinionated/expressInit.js";

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
      { value: "koa", name: "Koa.js" },
      { value: "hapi", name: "Hapi.js" },
      new Separator("Opinionated Frameworks"),
      { value: "nest", name: "NestJS" },
      { value: "adonis", name: "AdonisJS" },
      { value: "sails", name: "Sails.js" },
      { value: "loopback", name: "LoopBack" },
      { value: "feathers", name: "FeathersJS" },
    ],
  });

  switch (answerBackend) {
    case "express":
      console.log(chalk.white("Initializing Express.js project..."));
      await expressInit();
      break;
    case "fastify":
      console.log(chalk.green("Initializing Fastify project..."));
      break;
    case "koa":
      console.log(chalk.green("Initializing Koa.js project..."));
      break;
    case "hapi":
      console.log(chalk.green("Initializing Hapi.js project..."));
      break;
    case "nest":
      console.log(chalk.green("Initializing NestJS project..."));
      break;
    case "adonis":
      console.log(chalk.green("Initializing AdonisJS project..."));
      break;
  }
}
