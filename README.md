# Gemini Chat Navigator

A lightweight Google Chrome extension designed to enhance your user experience on Gemini by providing a visual navigation timeline of your conversation history.

## 🌟 Features
* **Focus on User Queries:** Exclusively filters and extracts your own questions, ignoring long AI responses to help you track your line of thought.
* **Quick Navigation:** Generates a fixed, elegant sidebar on the right side of the Gemini interface with numbered dots representing each query.
* **Hover Preview:** Hover your mouse over any dot to see a smooth tooltip preview (up to 50 characters) of that specific question.
* **Smooth Scrolling:** Click on any dot to instantly and smoothly scroll the page to that exact question.

## 🛠️ Tech Stack
* **Manifest V3** (The latest Chrome Extension standard)
* **JavaScript (Vanilla)** (DOM manipulation & MutationObserver for dynamic SPA binding)
* **CSS3** (Fixed positioning, frosted glass effect, and smooth transitions)

## 📦 How to Install Locally

1. **Clone or Download** this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable **"Developer mode"** by toggling the switch in the top-right corner.
4. Click on the **"Load unpacked"** button in the top-left corner.
5. Select the `Gemini-Navigator` folder containing the extension files.
6. Open or refresh [Gemini](https://gemini.google.com/) and enjoy a more structured conversation!

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).