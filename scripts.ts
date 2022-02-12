import { ScriptsConfiguration } from "https://deno.land/x/velociraptor@1.0.0-beta.17/mod.ts";

const appEntryPoint = 'src/main.ts';

export default <ScriptsConfiguration>{
    scripts: {
      start: `deno run --allow-net ${appEntryPoint}`,
      serve: `deno run --watch --allow-net ${appEntryPoint}`,
      test: `deno test --allow-net ${appEntryPoint}`,
    },
};