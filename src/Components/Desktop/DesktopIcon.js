import "./DesktopIcon.css";

export default function DesktopIcon(app) {

    const button = document.createElement("button");

    button.className = "desktop-icon";

    button.dataset.app = app.id;

    const glyph = document.createElement("span");

    glyph.className = "desktop-icon__glyph";

    glyph.textContent = "□";

    const label = document.createElement("span");

    label.className = "desktop-icon__label";

    label.textContent = app.title;

    button.append(glyph, label);

    return button;

}