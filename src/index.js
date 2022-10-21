import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import "./estilos.scss"

// function App(){
//   return "Soy App test";
// }

const elemento_del_dom = document.getElementById('root');
const root = ReactDOM.createRoot(elemento_del_dom);
root.render(<App/>);
