import runCommand from "../utils/runCommand.js";

export default async function solidInit() {
  await runCommand(
    "npm",
    ["init", "solid"],
    "Successfully initialized Solid project.",
  );
}
