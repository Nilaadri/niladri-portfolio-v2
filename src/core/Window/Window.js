import "./Window.css";

export default function Window({ title, content }) {

    const windowEl = document.createElement("section");
    windowEl.className = "window";

    const header = document.createElement("header");
    header.className = "window__header";

    const titleEl = document.createElement("h2");
    titleEl.className = "window__title";
    titleEl.textContent = title;

    const closeButton = document.createElement("button");
    closeButton.className = "window__close";
    closeButton.setAttribute("aria-label", "Close");
    closeButton.textContent = "✕";

    header.append(
        titleEl,
        closeButton
    );

    const divider = document.createElement("div");
    divider.className = "window__divider";

    const body = document.createElement("main");
    body.className = "window__body";

    if (content instanceof HTMLElement) {
        body.appendChild(content);
    } else {
        body.innerHTML = content;
    }

    windowEl.append(
        header,
        divider,
        body
    );

    return windowEl;

}