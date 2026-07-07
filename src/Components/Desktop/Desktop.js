import "./Desktop.css";

import DesktopIcon from "./DesktopIcon";

export default function Desktop() {

    const desktop = document.createElement("main");
    desktop.className = "desktop";

    const icons = document.createElement("section");
    icons.className = "desktop-icons";

    icons.append(

        DesktopIcon("About","about"),

        DesktopIcon("Experience","experience"),

        DesktopIcon("Projects","projects"),

        DesktopIcon("Gallery","gallery"),

        DesktopIcon("Terminal","terminal")

    );

    desktop.appendChild(icons);

    return desktop;

}