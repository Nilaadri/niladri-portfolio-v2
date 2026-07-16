import "./Desktop.css";

import DesktopIcon from "./DesktopIcon";
import apps from "../../data/apps";

export default function Desktop() {

    const desktop = document.createElement("main");
    desktop.className = "desktop";

    const icons = document.createElement("section");
    icons.className = "desktop-icons";

    apps.forEach((app) => {

        const icon = DesktopIcon(app);

        icon.addEventListener("click", () => {

            desktop.dispatchEvent(

                new CustomEvent("open-app", {

                    detail: {
                        app,
                        origin: icon
                    },

                    bubbles: false

                })

            );

        });

        icons.appendChild(icon);

    });

    desktop.appendChild(icons);

    return desktop;

}