import "./Loader.css";

export default function Loader() {

    const loader = document.createElement("section");
    loader.className = "loader";

    const content = document.createElement("div");
    content.className = "loader__content";

    const status = document.createElement("p");
    status.className = "loader__status";
    status.textContent = "INITIALIZING SYSTEM";

    const bar = document.createElement("div");
    bar.className = "loader__bar";

    const progress = document.createElement("div");
    progress.className = "loader__progress";

    const message = document.createElement("p");
    message.className = "loader__message";
    message.textContent = "Preparing Desktop...";

    bar.appendChild(progress);

    content.append(
        status,
        bar,
        message
    );

    loader.appendChild(content);

    return loader;
}