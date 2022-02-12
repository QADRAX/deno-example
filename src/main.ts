import { serve } from "../deps.ts";

const server = serve({ port: 8000 });

console.log("hosting app in http://localhost:8000/");

for await (const req of server) {
  req.respond({ body: "KLK \n" });
}