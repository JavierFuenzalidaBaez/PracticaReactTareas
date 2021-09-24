import React from "react";

import './CrearTareaBoton.css'



function CrearTareaBoton(props){

    const setOpenModal = () => {
        props.setOpenModal(!props.openModal);
        /* props.setOpenModal(prevState => !prevState); */
    }

    return(
        <button
        className="CreateTodoButton"
        onClick={setOpenModal}>
            +
        </button>
    );
}

export { CrearTareaBoton };