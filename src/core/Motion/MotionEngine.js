import { gsap } from "gsap";
import LaunchFrame from "./LaunchFrame";

const MotionEngine = {

    launch({ workspace, origin }) {

        if (!origin) return;

        const frame = LaunchFrame();

        document.body.appendChild(frame);

        const originRect = origin.getBoundingClientRect();
        const targetRect = workspace.getBoundingClientRect();

        workspace.style.opacity = "0";

        gsap.set(frame,{
            left:originRect.left,
            top:originRect.top,
            width:originRect.width,
            height:originRect.height
        });

        const tl = gsap.timeline({

            onComplete(){

                frame.remove();

            }

        });

        tl.to(frame,{

            left:targetRect.left,

            top:targetRect.top,

            width:targetRect.width,

            height:targetRect.height,

            duration:.55,

            ease:"power3.inOut"

        });

        tl.to(workspace,{

            opacity:1,

            duration:.2

        },"<70%");

        tl.to(frame,{

            opacity:0,

            duration:.2

        },"<");

    }

};

export default MotionEngine;