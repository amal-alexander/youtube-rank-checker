chrome.action.onClicked.addListener((tab) => {
  if (!tab.url.includes("youtube.com/results")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        alert("Go to a YouTube search page before clicking the extension.");
      }
    });
    return;
  }

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});
