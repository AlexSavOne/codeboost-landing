// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./styles/base.css";
import "./styles/animations.css";
import "./styles/typography.css";
import "./styles/cards.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
