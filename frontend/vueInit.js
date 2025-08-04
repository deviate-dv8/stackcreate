import runCommand from "../utils/runCommand.js";

export default async function vueInit() {
  await runCommand(
    "npx",
    ["create-vue@latest"],
    " Successfully initialized Vue project.",
  );
}
