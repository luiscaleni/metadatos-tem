import Persons from "./Persons";

export default function Testimony(){
    const phone = document.getElementById("phone");
    const cont = document.createElement("div");
    const img = new Image();
    const audio = document.createElement("audio");
    const name = document.createElement("p")
    let number = Math.round(Math.random() * (6 - 1) + 1);
    let value = 5000;
    //
    const cont2 = document.createElement("div");
    const contDYK = document.createElement("h3");
    const metadatos = document.createElement("p");
    const credit = document.createElement("p");
    let numAleatorio = 0;
    //
    metadatos.classList.add("titleMetadatos");
    credit.id="victims";
    cont.id="cont";
    img.src = Persons[number]["imagen"];
    img.classList.add("imgTestimony");
    name.textContent = Persons[number]["name"];
    audio.src = Persons[number]["audio"];
    audio.controls="true";
    audio.load();
    
    cont2.id="cont2";
    contDYK.textContent="¿Sabés lo que hacen con tus datos?";
    metadatos.textContent="#Metadatos";

    let tiempo = setInterval(() => {
        let outputCanvas = document.getElementById("output_canvas");
        if (!outputCanvas) {
            audio.autoplay="true";
            cont.style.display="flex";
            clearInterval(tiempo);
        }
    }, 1);
 
    audio.addEventListener("ended",()=>{
        cont.remove();
        cont2.appendChild(credit);
        cont2.appendChild(contDYK);
        cont2.appendChild(metadatos);
        phone.appendChild(cont2);

        setInterval(() => {
            if (numAleatorio <= value) {
                credit.textContent="Cantidad de víctimas actualmente: "+numAleatorio++;
            }
        }, 1);
    });
 
    cont.appendChild(img);
    cont.appendChild(name);
    cont.appendChild(audio);
    phone.appendChild(cont);
}
