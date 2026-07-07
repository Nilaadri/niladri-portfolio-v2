import { BootLoader } from "./components/Loader/Loader";
import Desktop from "./components/Desktop/Desktop";

export default function App() {
  return `
    ${BootLoader()}
    ${Desktop()}
  `;
}