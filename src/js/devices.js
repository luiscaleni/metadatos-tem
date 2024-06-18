import App from "./functions/App"

const ROOT = document.getElementById("root");
const CONTENT = document.createElement("div");
const LOADER = document.getElementById("loader");
let nomobile = '<p id="nomobile-text"><span style="color:#ff42f1; font-weight:bold;">#metadatos</span> es un proyecto que está diseñado para ejecutarse en dispositivos móbiles.</p>';
CONTENT.id="content";
CONTENT.innerHTML=nomobile;

if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)){
    LOADER.style.display="none";
    setTimeout(() => {
        document.getElementById("loaderPage").style.display="none";
        document.getElementById("ScreenWelcome").style.display="flex";
        App();
    }, 5000);
    
} else {
    //document.getElementById("loaderPage").style.display="none"; 
    setTimeout(() => {
        const PHONE = document.getElementById("phone");
        ROOT.removeChild(PHONE);
        ROOT.appendChild(CONTENT);
    }, 5);
}
