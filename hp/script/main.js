import run from "./interpreter.js"
const programArea = document.querySelector("#program");
const inputArea = document.querySelector("#input");
const outputArea = document.querySelector("#output");

programArea.addEventListener("input", _ => {
    cached = false;
    statusDiv.textContent = "準備完了";
});
inputArea.addEventListener("input", _ => {
});
outputArea.addEventListener("input", _ => {
    cached = false;
    statusDiv.textContent = "準備完了";
});

runButton.addEventListener("click", _ => {
    output = run(programArea.value, inputArea.value);
    outputArea.value = output;
});
