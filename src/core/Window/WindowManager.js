import MotionEngine from "../Motion/MotionEngine";
import Window from "./Window";
import featureRegistry from "../../data/featureRegistry";

export default function WindowManager() {

    const container = document.createElement("div");
    container.className = "window-manager";

    function openWindow(app, origin){

        const Feature = featureRegistry[app.id];

        if(!Feature) return;

        const windowEl = Window({

            title: app.title,

            content: ""

        });

        const body = windowEl.querySelector(".window__body");

        body.appendChild(
            Feature()
        );

        container.appendChild(windowEl);
        MotionEngine.launch({
        workspace: windowEl,
        origin
        });

        windowEl
            .querySelector(".window__close")
            .addEventListener("click",()=>{

                windowEl.remove();

            });

    }

    return{

        element:container,

        openWindow

    };

}