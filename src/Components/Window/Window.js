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
  closeButton.textContent = "×";

  header.append(titleEl, closeButton);

  const body = document.createElement("div");
  body.className = "window__body";
  body.innerHTML = content;

  windowEl.append(header, body);

  return windowEl;
}