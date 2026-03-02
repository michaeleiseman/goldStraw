function setBadgeText(enabled) {
    const text = enabled ? "ON" : "OFF";
    chrome.action.setBadgeText({text: text});
}
function startUp() {
    chrome.storage.sync.get("enabled", (data) => {
        setBadgeText(data.enabled)
    })
}
chrome.runtime.onStartup.addListener(startUp);
chrome.runtime.onInstalled.addListener(startUp);