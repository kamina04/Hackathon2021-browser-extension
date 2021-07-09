let simplifiedEng = document.getElementById("Words");
let idioms = document.getElementById("Idioms");
let transcript = document.getElementById("Transcript");

  idioms.addEventListener("change", async () => {  
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: printValue,
      });
  });

printValue = () => {
    return console.log('here');
}