import runCommand from "../../utils/runCommand.js";
import { input } from "@inquirer/prompts";
export default async function adonisInit() {
  const projectName = await input({
    message: "Enter the name of your AdonisJS project:",
    default: "my-app",
  });
  await runCommand("npm", ["init", "adonisjs@latest", projectName]);
}
