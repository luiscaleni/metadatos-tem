import Memoji from "./Memoji";
import WebCam from "./WebCam";
import load from "/assets/img/load.gif";

export default function App(){  
    let camera = document.getElementById("Camera");
    let screenWelcome = document.getElementById("ScreenWelcome");
    camera.addEventListener("click", ()=>{
        const logo =document.getElementById("logo");
        const meta = document.getElementById("titleMetadatos");
        const irisLoad = new Image();

        logo.remove();
        screenWelcome.remove();
        irisLoad.src=load;
        irisLoad.classList.add("loadGif");
        document.getElementById("loaderPage").style.display="flex";
        meta.id="lp-title";
        document.getElementById("loaderPage").appendChild(irisLoad);
        WebCam();
        Memoji();
    })
}