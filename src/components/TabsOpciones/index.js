import React from "react";
import { TareaContext } from "../TareaContext";

import './TabsOpciones.css';

function TabsOpciones(){

    const {
        setFiltroTarea,
      } = React.useContext(TareaContext);


    return(
        <div className="container">
        
        <label 
        onClick={() => setFiltroTarea('')}
        >Todas</label>
        <label
        onClick={() => setFiltroTarea('incompletas')}
        >Incompletas</label>
        <label 
        onClick={() => setFiltroTarea('completas')}
        >Completadas</label>
        </div>

    );
}

export  { TabsOpciones };