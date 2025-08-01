document.body.style.border = "5px solid pink"; // test extension

// console.log('aaaaaaaaaaaaaaaaaa');

(function () {
    console.log('--- Extension Running: YT-AutoScroller ---');
    const YT_SHORTS_URL = 'https://www.youtube.com/shorts/';
    const SKIP_PERCENT = 98;
    const ARROW_DOWN_KEY_PRESS = 40;
    const CHECK_INTERVAL_MS = 1000;
    let lastpercent = -1;
    let storedURL = null;
    let progressBar = null;

    function checkStoredURL(){
        const currentURL = window.location.href;
        if (storedURL !== null && storedURL !== currentURL) {
            resetCounter();
        }
    }

    function initiatePlayVideo(){
        let playButton = document.querySelector('[aria-label="Play (k)"]');
        if(playButton){
            playButton.click();
        } else{
            console.log('*** Cannot initiate to click play button ***')
        }
    }

    function mainAutoScroller() {
        const currentURL = window.location.href;
        // verify if user is in YT-shorts
        if (!currentURL.includes(YT_SHORTS_URL)) {
            console.log('*** Not a YouTube Shorts URL, stopping script. ***');
            return;  // Exit if the URL doesn't match
        }

        // check url changes
        checkStoredURL();

       3 // check current video
        progressBar = document.querySelector('.ytPlayerProgressBarDragContainer');
        if (progressBar) {
            watchVideo();
        } else {
            initiatePlayVideo();
        }
        
        // update stored url for progress detection
        storedURL = currentURL;
    }

    function watchVideo() {        
        const progressValue = progressBar.getAttribute('aria-valuenow');
        const progressPT = parseFloat(progressValue);

        if (progressPT >= SKIP_PERCENT || lastpercent > progressPT) {
            console.log('Skipping to next video', { lastpercent, progressPT });
            resetCounter();
            playNextVideo();
            return;
        }

        // update store percent to continue watching video
        lastpercent = progressPT;
    }

    function playNextVideo() {
        let nextButton = document.querySelector('[aria-label="Next video"]');
        if (nextButton) {
            console.log('Clicking next video button');
            nextButton.click();
        } else {
            console.log('Next button not found, simulating down arrow key press');
            simulateKeyPress(ARROW_DOWN_KEY_PRESS);
        }
    }

    function resetCounter() {
        lastpercent = -1;
    }

    function simulateKeyPress(keyCode) {
        const event = new KeyboardEvent('keydown', {
            key: 'ArrowDown',
            code: 'ArrowDown',
            keyCode: keyCode,
            which: keyCode,
            bubbles: true,
            cancelable: true
        });

        document.dispatchEvent(event);
    }

    console.log('--- Initiating YT-AutoScroll Listeners ---');
    const progressBarInterval = setInterval(mainAutoScroller, CHECK_INTERVAL_MS);

    window.addEventListener('hashchange', () => {
        console.log('--- Removing YT-AutoScroll Listeners ---');
        clearInterval(progressBarInterval);
    });
})();
