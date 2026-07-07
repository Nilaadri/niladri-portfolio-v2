import Desktop from "./components/Desktop/Desktop";
import Loader from "./components/Loader/Loader";

export default function App() {

    const root = document.createElement("div");

    const loader = Loader();
    const desktop = Desktop();

    // Hide desktop initially
    desktop.style.display = "none";

    root.append(loader, desktop);

    // After boot animation finishes
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