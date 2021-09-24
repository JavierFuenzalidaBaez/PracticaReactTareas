import React from "react";
import { TareaContext } from "../TareaContext";

import './TareasContador.css';

function TareasContador(){

    const {
        tareasCompletas,
        totalTareas
      } = React.useContext(TareaContext);

    return(
        <h2
        className="TodoCounter"
        >Completas {tareasCompletas} de {totalTareas} tareas
        </h2>
    );
}

export { TareasContador };