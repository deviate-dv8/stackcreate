import runCommand from "../../utils/runCommand.js";
import { input } from "@inquirer/prompts";
export default async function fastifyInit() {
  const projectName = await input({
    message: "Enter the name of your Express.js project:",
    default: "my-app",
  });
  await runCommand("npm", ["init", "fastify", projectName]);
}
