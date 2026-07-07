import Window from "./Window";

export default function WindowManager() {
  const container = document.createElement("div");
  container.className = "window-manager";

  function openWindow(app) {
    if (app.id !== "about") return;

    const windowEl = Window({
      title: "About",
      content: `
        <p>Hello, I'm Niladri.</p>
        <p>Welcome to my operating system portfolio.</p>
      `,
    });

    container.appendChild(windowEl);

    const closeButton = windowEl.querySelector(".window__close");

    closeButton.addEventListener("click", () => {
      windowEl.remove();
    });
  }

  return {
    element: container,
    openWindow,
  };
}