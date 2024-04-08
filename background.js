chrome.action.onClicked.addListener((tab) => {
    chrome.windows.create({
        url: "detached_window.html",
        type: "detached_panel"
    });
});