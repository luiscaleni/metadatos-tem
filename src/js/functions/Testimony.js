import Persons from "./Persons";
import argentinaNames from "./ArgentinaNames";

export default function Testimony(){
    const phone = document.getElementById("phone");
    const cont = document.createElement("div");
    const img = new Image();
    const audio = document.createElement("audio");
    const name = document.createElement("p");
    let number = Math.round(Math.random() * (6 - 1) + 1);
    let value = 50000;
    //
    const cont2 = document.createElement("div");
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
    
    cont2.id="cont2";
    credit.id="victims";
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
        cont2.appendChild(credit);
        
        phone.appendChild(cont2);
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
            if (numIncrement <= value-10) {
                numIncrement+=10;
                credit.textContent="Víctimas actualmente: "+numIncrement;
            }
            if (numIncrement==50000) {
                credit.remove();
                contNames.remove();

                cont2.appendChild(contDYK);
                cont2.appendChild(metadatos);
                reload=true;
            }
            if (reload) {
                reload=false;
                clearInterval(time);
                setTimeout(() => {
                    contDYK.remove();
                    metadatos.remove();
                    cont2.innerHTML="Reiniciando";
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
