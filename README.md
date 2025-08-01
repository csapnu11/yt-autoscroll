# YouTube Shorts AutoScroller - Firefox Extension

**A simple Firefox extension to automatically scroll through YouTube Shorts.**

---

## Features

* Automatically skips YouTube Shorts when certain video percentage(default: 98%) of the video has been watched.
* Simulates pressing the "down arrow" key or clicks the "Next video" button to continue to the next short.
* Ensures smooth, hands-free viewing of multiple YouTube Shorts.
* Works specifically on URLs containing `https://www.youtube.com/shorts/`.

---

## Installation

1. **Clone or Download the Repository:**

   If you're installing this from GitHub, clone the repo using:

   ```bash
   git clone https://github.com/your-username/yt-shorts-autoscroller.git
   ```

   Alternatively, you can download the ZIP and extract it.

2. **Load the Extension in Firefox:**

   * Open Firefox and type `about:debugging` in the address bar.
   * Click on **This Firefox** (or **Load Temporary Add-on** in older versions).
   * Click **Load Temporary Add-on**, then select the `manifest.json` file from the extracted repo folder.

3. **Test the Extension:**

   * Navigate to any YouTube Shorts video (`https://www.youtube.com/shorts/*`).
   * The extension will automatically start scrolling through videos as soon as it detects a progress bar.

---


## Features in Detail

* **Skip on Progress:** The extension tracks the `aria-valuenow` attribute of the progress bar, which provides the current video progress. If the video reaches the specified threshold (98%), it skips to the next video.

* **Fallback Mechanism:** If the "Next video" button is unavailable, the extension simulates pressing the down arrow key to trigger the next video.

* **Customizable:**

  * You can adjust the `SKIP_PERCENT` value in the script if you want the auto-scroll to trigger at a different point (e.g., 90%, 100%).

---

## Usage

* Simply open a **YouTube Shorts** video in your browser. The extension will automatically start working once the page loads.
* The script checks for the progress bar every 500ms, ensuring continuous scrolling experience.

---

## Development

If you'd like to contribute or modify the extension, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/yt-shorts-autoscroller.git
   ```

2. **Modify the Code:**

   * Edit `yt-autoscroll.js` to customize functionality.
   * Change the interval or behavior to suit your needs.

3. **Test Your Changes:**

   * Go to `about:debugging` in Firefox.
   * Load the modified `manifest.json` file again after making changes.

4. **Push Changes (if contributing):**

   * Commit and push your changes to GitHub.
   * Create a pull request for review.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

* [Report Issues](https://github.com/your-username/yt-shorts-autoscroller/issues)
* [Contribute](https://github.com/your-username/yt-shorts-autoscroller/pulls)

---

## Acknowledgments

* Thanks to [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions) for their detailed documentation on building Firefox extensions.
* Inspired by the need to make YouTube Shorts more hands-free and automated.
