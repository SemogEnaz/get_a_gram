import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { MAIN_SELECTOR } from './keys.tsx';

const printError = (elementSelector: string): void => {
  console.log(
    `${elementSelector} cannot be found, application not injected`);
};

// Wait for initial DOM load (template page)
window.addEventListener('load', () => {

  // Called on every mutation on the DOM body tag
  const observer = new MutationObserver((_mutations, obs) => {

    const rootContainer = document.querySelector(MAIN_SELECTOR);
    if (!rootContainer) { printError(MAIN_SELECTOR); return; }

    //const contentTag = document.querySelector(CONTENT_SELECTOR);
    //if (!contentTag) { printError(CONTENT_SELECTOR); return; }

    const root = ReactDOM.createRoot(rootContainer);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    console.log("App injected!");
    
    // If app is injected, the observation is stopped
    obs.disconnect();
  });

  // MutationObserver to check the DOM's body tag, checking for every change
  observer.observe(document.body, { childList: true, subtree: true });
});