import React, { useState } from "react"
import "./Phone.css"

import LoaderPage from "./CompSystem/CompLoaderPage"
import ScreenWelcome from "./CompSystem/CompScreenWelcome"

export default function Phone(){
    
    return (
        <div id="phone">
            <LoaderPage text="#Metadatos" id="titleMetadatos"/>
            <ScreenWelcome />
        </div>
    )
}