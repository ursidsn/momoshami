import run from "./interpreter.js";
const programArea = document.querySelector("#program");
const inputArea = document.querySelector("#input");
const outputArea = document.querySelector("#output");
const runButton = document.querySelector("#run");
const stopButton = document.querySelector("#stop");

runButton.addEventListener("click", _ => {
    output = run(programArea.value, inputArea.value);
    outputArea.value = output;
});
