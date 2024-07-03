import React from "react";
import { createRoot } from "react-dom/client";
import App from "../src/components/App";

const domnode = document.getElementById("root");
const root = createRoot(domnode);

root.render(<App />);
