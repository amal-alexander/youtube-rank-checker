const targetVideoId = "dQw4w9WgXcQ"; // Replace with your target video ID
const rankedVideoSet = new Set();

function isRegularVideo(el) {
  if (el.tagName !== "YTD-VIDEO-RENDERER") return false;

  const link = el.querySelector("a#thumbnail");
  const href = link?.href || "";

  return href.includes("/watch?v=") && !href.includes("/shorts/");
}

function injectRanks() {
  const allVideoElements = Array.from(document.querySelectorAll("ytd-video-renderer"));
  const filteredVideos = allVideoElements.filter(isRegularVideo);

  let rank = 1;

  filteredVideos.forEach((el) => {
    const link = el.querySelector("a#thumbnail");
    const href = link?.href || "";

    // Skip if thumbnail not yet visible
    const img = link?.querySelector("img");
    if (!img || img.naturalWidth === 0) return;

    // Unique video key for tracking
    const videoKey = href;

    // Avoid re-ranking same video
    if (rankedVideoSet.has(videoKey)) {
      rank++;
      return;
    }

    // Create rank badge
    const rankTag = document.createElement("div");
    rankTag.className = "rank-number";
    rankTag.textContent = `#${rank++}`;
    rankTag.style = `
      font-weight: bold;
      color: #fff;
      background: red;
      padding: 2px 6px;
      width: fit-content;
      margin-bottom: 4px;
      border-radius: 4px;
      font-size: 14px;
    `;

    const container = el.querySelector("#dismissible") || el;
    container.prepend(rankTag);

    // Highlight target video
    if (href.includes(targetVideoId)) {
      el.style.border = "3px solid lime";
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Mark this video as ranked
    rankedVideoSet.add(videoKey);
  });
}

// 🔁 Throttle function to prevent overfiring
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Delay startup for safety
setTimeout(() => {
  const throttledInject = throttle(injectRanks, 700); // Run max every 700ms

  // Initial inject
  injectRanks();

  // 👀 MutationObserver on search result area only
  const targetNode = document.querySelector("ytd-section-list-renderer #contents") || document.body;

  const observer = new MutationObserver(() => {
    throttledInject();
  });

  observer.observe(targetNode, {
    childList: true,
    subtree: true,
  });
}, 500);
