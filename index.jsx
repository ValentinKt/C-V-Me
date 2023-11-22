import React from "react";
import ReactDOMClient from "react-dom/client";
import { Cv } from "./screens/Cv";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Cv />);
