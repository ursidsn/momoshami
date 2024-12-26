const programArea = document.querySelector("#program");
const inputArea = document.querySelector("#input");
const outputArea = document.querySelector("#output");
programArea.addEventListener("input", _ => {
    cached = false;
    statusDiv.textContent = "準備完了";
});
