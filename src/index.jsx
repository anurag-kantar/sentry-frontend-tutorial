import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./components/App";

// Import and init Sentry SDK
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://cf9de19febab68c35351875677c2afb9@o4505833623388160.ingest.us.sentry.io/4509319973306368",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);