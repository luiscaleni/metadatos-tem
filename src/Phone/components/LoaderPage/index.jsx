import React from "react";
import "./LoaderPage.css";
import logo from "/assets/img/logo.svg";

export default function LoaderPage({id=""}){
    return (
        <div id="loaderPage" className="loaderPage">
           <img src={logo} id="logo"/>
           <p id={id}></p>
        </div>
    )
}