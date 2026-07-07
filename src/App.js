import Desktop from "./components/Desktop/Desktop";
import Loader from "./components/Loader/Loader";

export default function App() {

    const root = document.createElement("div");

    root.appendChild(
        Loader()
    );

    root.appendChild(
        Desktop()
    );

    return root;
}