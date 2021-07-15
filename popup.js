let simplifiedEng = document.getElementById("Words");
let idioms = document.getElementById("Idioms");
let transcript = document.getElementById("Transcript");

simplifiedEng.addEventListener("change", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runSimplifiedEng,
    });
});

idioms.addEventListener("change", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runIdioms,
    });
});

transcript.addEventListener("change", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runTranscript,
    });
});

function popUp() {
    const dialogBox = document.getElementById("dialogBox");
    return dialogBox.style.visibility = 
    (dialogBox.style.visibility != "visible") ? "visible" : "hidden";
}

runSimplifiedEng = async () => {
    document.querySelector(".myDiv").addEventListener("click", e => console.log(event.target));
}

function fetchData() {
    return fetch('http://localhost:5000')
        .then(response => response.xml())
        .then(
            console.log(response)
        )
        .catch(error => console.error(error));
}