document.getElementById("check").addEventListener("click", () => {
  const keyword = "future bass music"; // 🔧 Hardcoded keyword
  const videoId = "dQw4w9WgXcQ";       // 🔧 Hardcoded video ID

  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(keyword)}`;

  chrome.tabs.create({ url: searchUrl, active: false }, (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (vidId) => {
        const results = Array.from(document.querySelectorAll("ytd-video-renderer, ytd-grid-video-renderer"));
        for (let i = 0; i < results.length; i++) {
          const href = results[i].querySelector("a#thumbnail")?.href || "";
          if (href.includes(vidId)) return i + 1;
        }
        return -1;
      },
      args: [videoId],
    }, (results) => {
      const rank = results[0].result;
      document.getElementById("result").textContent = 
        rank !== -1 ? `Video rank: ${rank}` : "Video not found in top results.";
      chrome.tabs.remove(tab.id);
    });
  });
});
