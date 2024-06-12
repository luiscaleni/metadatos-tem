export default function WebCam(){
    const videoDom = document.createElement("video")
    videoDom.id="video"
    videoDom.autoplay="true"
    videoDom.playsInline="true"
    document.getElementById("phone").appendChild(videoDom)
}