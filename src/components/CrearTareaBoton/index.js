import React from "react";

import './CrearTareaBoton.css'

const crearTarea = () => {
    alert('crear');
}

function CrearTareaBoton(){
    return(
        <button
        className="CreateTodoButton"
        onClick={crearTarea}>
            +
        </button>
    );
}

export { CrearTareaBoton };