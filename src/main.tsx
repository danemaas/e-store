import ReactDOM from "react-dom/client";

import App from "./App.js";
import ErrorBoundary from "./pages/ErrorBoudery";

import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
} else {
  console.error("Root element not found");
}
