
import React from "react";
import NavBar from "./componentes/NavBar";
import ItemListConteiner from "./componentes/ItemListConteiner";

const App = () => { 
    return (
        <>
        <NavBar/>
        <ItemListConteiner greeting="hola, como va?"/>
        </>
    );

}

export default App;