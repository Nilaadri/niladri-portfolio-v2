import "./Desktop.css";

import DesktopIcon from "./DesktopIcon";

import apps from "../../data/apps";

export default function Desktop() {

    const desktop = document.createElement("main");

    desktop.className = "desktop";

    const icons = document.createElement("section");

    icons.className = "desktop-icons";

    apps.forEach(app => {

        icons.appendChild(
            DesktopIcon(app)
        );

    });

    desktop.appendChild(icons);

    return desktop;

}