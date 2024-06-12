import Testimony from "./Testimony";
import Mesh from "./lib/Mesh";

export default function FaceMesh(){
    const phone = document.getElementById("phone");
    const outputCanvas = document.createElement("canvas");
    outputCanvas.id="output_canvas";
    phone.appendChild(outputCanvas);

    Mesh();
    setTimeout(() => {
        Testimony();
    },16000);
}