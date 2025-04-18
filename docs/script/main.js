import run from "./interpreter.js";
const codeArea = document.querySelector("#code");
const inputArea = document.querySelector("#input");
const outputArea = document.querySelector("#output");
const runButton = document.querySelector("#run");
const stopButton = document.querySelector("#stop");

runButton.addEventListener("click", _ => {
    let output = run(codeArea.value, inputArea.value);
    stopButton.disabled = false;
    outputArea.value = output;
});

stopButton.addEventListener("click", _ => {
    outputArea.value = ""
    stopButton.disabled = true;
});
