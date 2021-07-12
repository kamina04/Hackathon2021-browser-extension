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

printValue = () => {
    return console.log('here');
}

runSimplifiedEng = () => {
    fetch(chrome.runtime.getURL('/template.html')).then(r => r.text()).then(html => {
        document.body.insertAdjacentHTML('beforeend', html);
        // not using innerHTML as it would break js event listeners of the page
      });
}

