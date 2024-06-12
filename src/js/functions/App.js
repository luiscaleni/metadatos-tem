import Memoji from "./Memoji";
import WebCam from "./WebCam";

export default function App(){  
    let camera = document.getElementById("Camera");
    let screenWelcome = document.getElementById("ScreenWelcome");
    camera.addEventListener("click", ()=>{
        screenWelcome.remove();
        document.getElementById("loaderPage").style.display="flex";
        let meta = document.getElementById("titleMetadatos");
        meta.id="lp-title";
        meta.innerHTML="Cargando";
        WebCam();
        Memoji();
    })
}