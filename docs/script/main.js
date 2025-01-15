import run from "./interpreter.js";
const codeArea = document.querySelector("#code");
const inputArea = document.querySelector("#input");
const outputArea = document.querySelector("#output");
const runButton = document.querySelector("#run");
const stopButton = document.querySelector("#stop");

runButton.addEventListener("click", _ => {
    output = run(codeArea.value, inputArea.value);
    outputArea.value = output;
});
