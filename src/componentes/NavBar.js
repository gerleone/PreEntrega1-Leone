import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return( 
            <nav id="navBar">
                <h1 id="title">OctopuShirts</h1> 
                <div id="categorias">
                    <a href="./index" className="links">Inicio</a>
                    <a href="./index" className="links">Damas</a>
                    <a href="./index" className="links">Caballeros</a>
                    <a href="./index" className="links">Niños</a>
                </div>
                <CartWidget/>
            </nav>
    )
}
export default NavBar;