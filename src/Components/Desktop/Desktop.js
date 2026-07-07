import "./Desktop.css";

export default function Desktop() {

    const desktop = document.createElement("main");
    desktop.className = "desktop";

    const center = document.createElement("div");
    center.className = "desktop__center";

    const status = document.createElement("p");
    status.className = "desktop__status";
    status.textContent = "SYSTEM READY";

    const title = document.createElement("h1");
    title.className = "desktop__title";
    title.textContent = "NILADRI";

    const subtitle = document.createElement("p");
    subtitle.className = "desktop__subtitle";
    subtitle.textContent =
        "Project Management • Operations • Scrum";

    center.append(
        status,
        title,
        subtitle
    );

    desktop.appendChild(center);

    return desktop;
}