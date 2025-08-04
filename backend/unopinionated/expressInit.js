import runCommand from "../../utils/runCommand.js";
import { input, select } from "@inquirer/prompts";
export default async function expressInit() {
  const projectName = await input({
    message: "Enter the name of your Express.js project:",
    default: "my-app",
  });
  const typescriptSupport = await select({
    message: "Would you like to include TypeScript support?",
    choices: [
      { value: "yes", name: "Yes" },
      { value: "no", name: "No" },
    ],
  });
  const type = await select({
    message: "What type of Express.js project would you like to create?",
    choices: [
      { value: "basic", name: "Basic" },
      { value: "api", name: "API" },
      { value: "webapp", name: "Web Application" },
    ],
  });
  switch (type) {
    case "basic":
      console.log("Creating a basic Express.js project...");
      if (typescriptSupport === "no") {
        await runCommand(
          "npx",
          ["express-generator", "--no-view", projectName],
          "Successfully initialized Express.js project with TypeScript support.",
        );
      } else {
        console.log("Including TypeScript support...");
        await runCommand(
          "npm",
          ["install", "-g", "pnpm"],
          "succesfully installed dependency",
        );
        await runCommand(
          "npx",
          ["create-express-api", "-t", "-d", projectName],
          "Successfully initialized Express.js project with TypeScript support.",
        );
      }
      break;
    case "api":
      console.log("Creating an API with Express.js...");
      await runCommand(
        "npm",
        ["install", "-g", "pnpm"],
        "succesfully installed dependency",
      );
      await runCommand(
        "npx",
        [
          "create-express-api",
          `${typescriptSupport === "yes" ? "-t" : ""}`,
          "-d",
          projectName,
        ],
        "Successfully initialized Express.js API project.",
      );
      break;
    case "webapp":
      console.log("Creating a web application with Express.js...");
      if (typescriptSupport === "no") {
        await runCommand(
          "npx",
          ["express-generator", "-e", projectName],
          "Successfully initialized Express.js web application.",
        );
      } else {
        console.log("Including TypeScript support for web application...");
        await runCommand(
          "npx",
          ["express-generator-typescript", projectName],
          "Successfully initialized Express.js web application with TypeScript support.",
        );
      }
      break;
    default:
      console.error("Invalid project type selected.");
      return;
  }
}
