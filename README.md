# 🎬 YouTube Rank Checker – Chrome Extension

This Chrome Extension helps you **visually check where your YouTube video ranks** for any keyword — directly on YouTube's search results page.

🚀 No dashboards. No guesswork. Just instant, in-page insights.

---

## ✅ What It Does

- Shows rank numbers (`#1`, `#2`, `#3`, ...) beside each video
- Highlights your own video if found (based on Video ID)
- Ignores:
  - Shorts (`/shorts/`)
  - Sponsored results
  - Playlists
  - Community posts or ads
- Works with infinite scroll and lazy-loaded results
- Optimized for speed using `MutationObserver` with throttling

---

## 🔧 How to Use

1. Clone or [Download the ZIP](https://github.com/YOUR-REPO-HERE/archive/refs/heads/main.zip)
2. Go to `chrome://extensions/` in your browser
3. Enable **Developer Mode**
4. Click **Load Unpacked**
5. Select the `youtube-rank-checker` folder
6. Go to YouTube and:
   - Search any keyword
   - Scroll down a bit to load results
   - Click the extension icon
7. You’ll see real-time ranks beside each video

---

## 🛠️ Tech Stack

- Manifest V3 (Chrome Extension)
- `background.js` for injection trigger
- `content.js` for DOM parsing + rank rendering
- No third-party libraries
- Fully client-side (no tracking, no API required)

---

## 🧪 Future Plans

- Google Sheets integration using Apps Script (automated rank lookup)
- Option to enter multiple keywords + video IDs
- Export to CSV
- Auto-detect your own videos
- Simple UI settings for managing multiple projects

---

## 👤 Author

Built by [Amal Alexander](https://www.linkedin.com/in/amal-alexander-305780131/),  
focused on SEO, automation, and creator-first tools.

---

## 🤝 Contributing

Open to suggestions, pull requests, or just feedback.  
Feel free to fork this repo or raise issues to improve it further.

---

## 📜 License

MIT License — feel free to use, modify, and share with credit.
