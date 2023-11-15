import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { ThemeProvider } from "./components/theme-provider.tsx";
import { CookiesProvider } from "react-cookie";
import { Toaster } from "./components/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
      <Toaster />
    </ThemeProvider>
  </React.StrictMode>
);
