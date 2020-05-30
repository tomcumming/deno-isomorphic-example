import { rot13 } from "./shared.ts";

const domReady = new Promise((res) => {
  window.addEventListener("DOMContentLoaded", res);
  if (document.readyState === "complete") {
    res();
  }
});

async function start() {
  await domReady;

  const input = document.querySelector("#input");
  const output = document.querySelector("#output");
  if (input instanceof HTMLTextAreaElement && output instanceof HTMLElement) {
    input.addEventListener("input", (e) => {
      output.innerText = rot13(input.value);
    });
  } else {
    throw new Error(`Can't find input and output elements`);
  }
}

start();
