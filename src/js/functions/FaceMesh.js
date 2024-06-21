import Testimony from "./Testimony";
import Mesh from "./Mesh";

export default function FaceMesh(){
    const phone = document.getElementById("phone");
    const outputCanvas = document.createElement("canvas");
    let testimony=false;
    outputCanvas.id="output_canvas";
    phone.appendChild(outputCanvas);

    Mesh();
    setTimeout(() => {
        if(testimony){}
        let tiempo = setInterval(() => {
            let btn = document.getElementById("btn")
            if(!btn){
                Testimony();
                testimony=true;
                clearTimeout(tiempo);
            }else{
                console.log("aún no");
            }
        }, 0);
    },16000);
}