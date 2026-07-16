import Desktop from "./core/Desktop/Desktop";
import Loader from "./core/Loader/Loader";
import WindowManager from "./core/Window/WindowManager";

export default function App() {
  const root = document.createElement("div");

  const loader = Loader();
  const desktop = Desktop();

  const windows = WindowManager();

  desktop.style.display = "none";

  root.append(loader, desktop, windows.element);

 desktop.addEventListener("open-app", ({ detail }) => {

    windows.openWindow(
        detail.app,
        detail.origin
    );

});

  setTimeout(() => {
    desktop.style.display = "flex";

    requestAnimationFrame(() => {
      desktop.classList.add("desktop--visible");
      loader.classList.add("loader--hidden");
    });

    setTimeout(() => {
      loader.remove();
    }, 800);
  }, 2500);

  return root;
}