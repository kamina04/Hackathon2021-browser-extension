chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({});
    console.log('Default background color set to %cgreen', `color: ${colour}`)
})