import runCommand from "../../utils/runCommand.js";
import { input } from "@inquirer/prompts";
export default async function nestInit() {
  const projectName = await input({
    message: "Enter the name of your NestJS project:",
    default: "my-app",
  });
  await runCommand(
    "npm",
    ["i", "-g", "@nestjs/cli"],
    "Successfully installed NestJS CLI globally.",
  );
  await runCommand("nest", ["new", projectName]);
}
