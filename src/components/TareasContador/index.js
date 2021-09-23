import React from "react";

import './TareasContador.css';

function TareasContador({tareasCompletas, totalTareas}){
    return(
        <h2
        className="TodoCounter"
        >Completas {tareasCompletas} de {totalTareas} tareas
        </h2>
    );
}

export { TareasContador };