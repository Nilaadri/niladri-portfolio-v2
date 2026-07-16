import "./Loader.css";

export default function Loader() {

    const loader = document.createElement("section");
    loader.className = "loader";

    const content = document.createElement("div");
    content.className = "loader__content";

    const status = document.createElement("p");
    status.className = "loader__status";
    status.textContent = "INITIALIZING";

    const logo = document.createElement("h1");
    logo.className = "loader__logo";
    logo.textContent = "OS/ND";

    const version = document.createElement("p");
    version.className = "loader__version";
    version.textContent = "v0.1 ALPHA";

    content.append(
        status,
        logo,
        version
    );

    loader.appendChild(content);

    return loader;
}