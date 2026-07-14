import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { raise } from "./helpers/raise";

createRoot(
  document.getElementById("root") ?? raise("#root element not found"),
).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
