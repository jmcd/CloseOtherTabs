# Close Other Tabs

A Chrome extension that keeps the tab you're on and closes every other tab in the window.

- Click the toolbar button, or press **Alt+Shift+Q**
- Only the current window is affected
- Pinned tabs stay open, like Chrome's own "Close other tabs"
- No permissions, no data collected

Change the shortcut at `chrome://extensions/shortcuts`.

## Install from source

1. Open `chrome://extensions` and turn on **Developer mode**.
2. Click **Load unpacked** and choose this folder.

## Package for the Chrome Web Store

Bump `version` in `manifest.json`, then:

```sh
zip -X -r close-other-tabs-<version>.zip manifest.json background.js icons
```

Store listing text and images are in `store-assets/`. The images are rendered from the HTML in `store-assets/src/` at 1280×800 (screenshot) and 440×280 (promo tile).

## Choosing a shortcut

Chrome silently refuses an extension's default shortcut if Chrome already uses it. On Linux and Windows that includes Alt+Shift+W, X, T, C, P and Z — see
[`accelerator_table.cc`](https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/ui/accelerator_table.cc).

## Licence

[MIT](LICENSE)
