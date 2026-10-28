// Close every tab in the active tab's window except the active tab.
// Pinned tabs are kept, matching Chrome's built-in "Close other tabs".
chrome.action.onClicked.addListener(async (activeTab) => {
  const tabs = await chrome.tabs.query({ windowId: activeTab.windowId });
  const toClose = tabs
    .filter((tab) => tab.id !== activeTab.id && !tab.pinned)
    .map((tab) => tab.id);

  if (toClose.length > 0) {
    await chrome.tabs.remove(toClose);
  }
});
