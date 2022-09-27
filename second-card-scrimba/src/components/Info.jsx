import React from "react";
import './componentsStyle.css'
export default function Info(){
    return(
        <div className="infoDiv">
            <img src="/profile.png"/>
            <h2>Paula Álvarez</h2>
            <h3>Front end developer</h3>
            <p><a href="https://beellee.github.io/super-acorn-website/">My super-arcorn-website</a></p>
            <button>  📩 Email</button>
        </div>
    )

}