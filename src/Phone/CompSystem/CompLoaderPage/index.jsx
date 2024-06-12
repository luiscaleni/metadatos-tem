import React from "react"
import "./LoaderPage.css"

export default function LoaderPage({text, id}){
    return (
        <div id="loaderPage" className="loaderPage">
            <p id={id}>{text}</p>
        </div>
    )
}