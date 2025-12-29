import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { handleSpaRedirect } from "./utils/spa-redirect";

// Handle GitHub Pages SPA redirect
handleSpaRedirect();

createRoot(document.getElementById("root")!).render(<App />);
