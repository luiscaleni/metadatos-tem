import Persons from "./Persons";
import argentinaNames from "./ArgentinaNames";

export default function Testimony(){
    const phone = document.getElementById("phone");
    const cont = document.createElement("div");
    const img = new Image();
    const audio = document.createElement("audio");
    const name = document.createElement("p");
    let number = Math.round(Math.random() * (6 - 1) + 1);
    let value = 500000;
    //
    const contArgPersons = document.createElement("div");
    const contDYK = document.createElement("h3");
    const metadatos = document.createElement("p");
    const credit = document.createElement("p");
    const contNames = document.createElement("div");
    let numIncrement = 0;
    let num = 0;
    let reload=false;
    //
    metadatos.classList.add("titleMetadatos");
    cont.id="cont";
    img.src = Persons[number]["imagen"];
    img.classList.add("imgTestimony");
    name.textContent = Persons[number]["name"];
    audio.src = Persons[number]["audio"];
    audio.controls="true";
    audio.load();
    
    contArgPersons.id="contArgPersons";
    credit.id="argPersons";
    contNames.id="contNames";

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
        contArgPersons.appendChild(credit);
        
        phone.appendChild(contArgPersons);
        phone.appendChild(contNames);

        setInterval(() => {
            if (num <= 141) {
                const element = argentinaNames[num];
                let p = document.createElement("p");
                p.textContent=element;
                contNames.appendChild(p);
            }
            num++
        }, 200);

        let time = setInterval(() => {
            if (numIncrement <= value-100) {
                numIncrement+=100;
                credit.textContent="Todas estas personas se escanearon el iris en Argentina: "+numIncrement;
            }
            if (numIncrement==500000) {
                credit.remove();
                contNames.remove();

                contArgPersons.appendChild(contDYK);
                contArgPersons.appendChild(metadatos);
                reload=true;
            }
            if (reload) {
                reload=false;
                clearInterval(time);
                setTimeout(() => {
                    contDYK.remove();
                    metadatos.remove();
                    contArgPersons.innerHTML="Reiniciando";
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                }, 10000);
            }
        },1);
    });

    cont.appendChild(img);
    cont.appendChild(name);
    cont.appendChild(audio);
    phone.appendChild(cont);
}
