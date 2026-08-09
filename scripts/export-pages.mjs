import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const output = new URL("../_site/", import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(new URL("../dist/client/", import.meta.url), output, { recursive: true });

const { default: worker } = await import(new URL("../dist/server/index.js", import.meta.url));
const response = await worker.fetch(
  new Request("https://oldweather.org/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Could not render the home page: ${response.status}`);
await writeFile(new URL("index.html", output), await response.text());
await writeFile(new URL(".nojekyll", output), "");
console.log("GitHub Pages site exported to _site/");
