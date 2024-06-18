import React from "react"
import './ScreenWelcome.css'

export default function ScreenWelcome(){
    return (
        <>
            <div id="ScreenWelcome">
                <div id="sw-contGral">
                    <div id="sw-title">
                        <p>Bienvenido a</p>
                        <h1>#metadatos</h1>
                    </div>
                    <div id="sw-contText">    
                        <p>Escanea tu rostro y observa cómo te transformas en un adorable mapache virtual que imita todas tus expresiones faciales en tiempo real. Diviértete explorando las capacidades de tu nuevo amigo mapache, comparte tus expresiones con amigos, familiares, y descubre un mundo de creatividad sin límites. Comienza ahora y deja que tu mapache interior cobre vida. ¡Tu aventura en #metadatos está a punto de comenzar!</p>
                    </div>
                    <button id="Camera">¡Comencemos!</button>
                </div>
            </div>
        </>
    )
}