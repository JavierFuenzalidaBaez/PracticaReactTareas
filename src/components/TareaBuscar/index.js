import React from "react";

import './TareaBuscar.css';

function TareaBuscar({ valorTarea, setValorTarea }){

    const cambiarValorTarea = (e) => {
        console.log(e.target.value);
        setValorTarea(e.target.value);
    };


    return(
        <input 
        className="TodoSearch"
        placeholder="Busca tu Tarea"
        value={valorTarea}
        onChange={cambiarValorTarea}/>
    );
}

export { TareaBuscar };