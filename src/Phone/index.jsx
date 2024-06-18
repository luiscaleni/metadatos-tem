import React from "react";
import "./Phone.css";

import LoaderPage from "./components/LoaderPage"
import ScreenWelcome from "./components/ScreenWelcome"

export default function Phone(){
    
    return (
        <div id="phone">
            <LoaderPage id="titleMetadatos"/>
            <ScreenWelcome />
        </div>
    )
}