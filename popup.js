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
function runTranscript() {
    const videoIPlayer = document.getElementsByClassName("hero-player"); //works for iPlayer when video is on

    const archives = document.getElementsByClassName("gel-layout__item timeline__buttons");


    //container
    const div = document.createElement("div");
    div.classList.add('main_container');
    //container 2
    const div2 = document.createElement("div");
    div2.classList.add('container_button');

    //button and call the data
    const bbc_button = document.createElement('button');
    bbc_button.type = 'button';
    bbc_button.innerHTML = 'Press me';

    //dialog box
    const dialogBox = document.createElement("div");
    dialogBox.type = "div";
    dialogBox.classList.add("dialogBox_container");
    const text_p = document.createElement("p");
    // text_p.innerHTML = "nanananananana"
    dialogBox.append(text_p);



    div.append(div2);
    div2.append(bbc_button);
    div.append(dialogBox);

    bbc_button.onclick = async function () {
        let url = 'http://localhost:5000/translated-subtitles';
        let response = await fetch(url);
        let data = await response.text();
        // console.log(data);

        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        console.log(xml.documentElement.textContent);
        dialogBox.style.visibility =
            (dialogBox.style.visibility != "visible") ? "visible" : "hidden";
        text_p.innerText = xml.documentElement.textContent;
    };


    // videoIPlayer[0].append(bbc_button);
    archives[0].append(div);
}
