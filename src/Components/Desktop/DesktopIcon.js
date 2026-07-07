import "./DesktopIcon.css";

export default function DesktopIcon(label, id) {
    const icon = document.createElement("button");

    icon.className = "desktop-icon";
    icon.dataset.app = id;

    const glyph = document.createElement("span");
    glyph.className = "desktop-icon__glyph";
    glyph.textContent = "□";

    const text = document.createElement("span");
    text.className = "desktop-icon__label";
    text.textContent = label;

    icon.append(glyph, text);

    return icon;
}