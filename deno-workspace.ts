import { DenoWorkspace } from "https://denopkg.com/BentoumiTech/denox/src/interfaces.ts";

const appPath = "src/main.ts";

const workspace: DenoWorkspace = {
  scripts: {
    start: {
      file: appPath,
      deno_options: {
        "allow-net": "0.0.0.0:8000",
      }
    },
  },
};

export { workspace };