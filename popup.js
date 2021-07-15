let simplifiedEng = document.getElementById("Words");
let idioms = document.getElementById("Idioms");
let transcript = document.getElementById("Transcript");

transcript.addEventListener("change", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runTranscript,
    });
});

idioms.addEventListener("change", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runIdioms,
    });
});

simplifiedEng.addEventListener("change", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: runSimplifiedEng,
    });
});

function popUp() {
    // const dialogBox = document.getElementById("dialogBox");
    // return dialogBox.style.visibility = 
    // (dialogBox.style.visibility != "visible") ? "visible" : "hidden";
    console.log('works');
}

function runTranscript () {
    // const div = document.createElement("div");
    // document.body.appendChild(div);
    const videoIPlayer = document.getElementsByClassName("hero-player"); //works for iPlayer when video is on

    const archives = document.getElementsByClassName("gel-layout__item timeline__buttons");

    const div = document.createElement("div");
    div.classList.add('container_button');
    const bbc_button = document.createElement('button');
    bbc_button.type = 'button';
    bbc_button.innerHTML = 'Press me';    
    bbc_button.onclick = function(req, response) { 

        fetch('http://localhost:5000')
        .then(response => response.xml())
        .catch(error => console.error(error));
     };
    
    
    // videoIPlayer[0].append(bbc_button);
    archives[0].append(bbc_button);
}

runSimplifiedEng = async () => {
}

function fetchData() {
    return fetch('http://localhost:5000')
        .then(response => response.xml())
        .then(
            console.log(response)
        )
        .catch(error => console.error(error));
}