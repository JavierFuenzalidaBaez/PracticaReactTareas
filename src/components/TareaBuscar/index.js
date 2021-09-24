import React from "react";
import { TareaContext } from "../TareaContext";

import './TareaBuscar.css';

function TareaBuscar(){

    const {
        valorTarea,
        setValorTarea
      } = React.useContext(TareaContext);

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