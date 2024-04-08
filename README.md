# Chrome extension using React + TypeScript + Vite

This template provides a minimal setup to get chrome extension using React working in Vite with HMR.

## How to test

- Clone the repo
- `yarn` to install dependencies
- `yarn build` It will create dist folder. I have used vite config to copy the manifest.json file and its dependant script file to dist folder after building.
manifest.json is important for the chrome extension. Read more [https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world]

Then open chrome extensions (type this in the chrome address bar `chrome://extensions/` )

1. Enable developer mode.
2. Click Load unpacked and choose dist folder.
3. Once the extension is loaded. pin to the toolbar.
4. Click on it. it will open a new panel 
