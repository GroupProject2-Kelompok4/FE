import React from "react";
import ReactDOM from "react-dom/client";
import Login from "../src/pages/Login";
import "./index.css";
import MenteeLog from "./pages/MenteeLog";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MenteeLog />
  </React.StrictMode>
);
