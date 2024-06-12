import App from "./functions/App"

let root = document.getElementById("root")
let content = document.createElement("div")
let nomobile = '<p id="nomobile-text"><span style="color:#ff42f1; font-weight:bold;">#metadatos</span> es un proyecto que está diseñado para ejecutarse en dispositivos móbiles.</p>'
content.id="content"
content.innerHTML=nomobile

if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)){
    setTimeout(() => {
        document.getElementById("loaderPage").style.display="none"
        document.getElementById("ScreenWelcome").style.display="flex"
        App()
    }, 4000)
    
} else {
    setTimeout(() => {
        root.removeChild(document.getElementById("phone"))
        root.appendChild(content)
    }, 100);
}
