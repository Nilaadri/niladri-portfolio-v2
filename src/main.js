import "./style.css";

import App from "./App";

const app = document.querySelector("#app");

app.innerHTML = "";

app.appendChild(
    App()
);