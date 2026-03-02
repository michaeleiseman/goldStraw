const toggle = document.getElementById("toggle");
function setBadgeText(enabled) {
    const text = enabled ? "ON" : "OFF";
    chrome.action.setBadgeText({text: text});
}
//on startup get the state of the toggle and apply it
chrome.storage.sync.get("enabled", (data) => {
    toggle.checked = data.enabled;
    setBadgeText(data.enabled);
});
//change the storage when the user toggles the switch
toggle.addEventListener("change", flickSwitch, false);
function flickSwitch(event) {
    chrome.storage.sync.set({"enabled": toggle.checked})
    setBadgeText(toggle.checked);
}