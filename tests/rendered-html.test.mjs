import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Old Weather holding page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Old Weather/);
  assert.match(html, /Yesterday’s logs/);
  assert.match(html, /project is currently resting/i);
  assert.match(html, /not currently running an active transcription project/i);
  assert.doesNotMatch(html, /Old Weather: WWII|Old Weather: Whaling|Old Weather: Arctic/);
  assert.doesNotMatch(html, /Explore the projects|Community forum/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});
