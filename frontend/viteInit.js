import runCommand from "../utils/runCommand.js";

export default async function vueInit() {
  await runCommand(
    "npm",
    ["create", "vite@latest"],
    " Successfully initialized Vite project.",
  );
}
