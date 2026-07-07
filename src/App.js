import Desktop from "./components/Desktop/Desktop";
import Loader from "./components/Loader/Loader";
import WindowManager from "./components/Window/WindowManager";

export default function App() {
  const root = document.createElement("div");

  const loader = Loader();
  const desktop = Desktop();

  const windows = WindowManager();

  desktop.style.display = "none";

  root.append(loader, desktop, windows.element);

  desktop.addEventListener("open-app", (event) => {
    windows.openWindow(event.detail);
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