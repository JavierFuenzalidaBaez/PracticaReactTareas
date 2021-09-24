import React, { useState } from "react";
import { TareaContext } from "../TareaContext";
import './TareaFormulario.css'

function TareaFormulario (){

    const [valorTarea, setValorTarea] = useState('');

    const {
        agregarTarea,
        setOpenModal
    } = React.useContext(TareaContext)
    
    const capturarValor = (event) => {
        setValorTarea(event.target.value)
    }

    const cancelar = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        agregarTarea(valorTarea)
        setOpenModal(false)
        
    }
    
    return(
    <form onSubmit={onSubmit} >
      <label>Escribe tu nueva tarea</label>
      <textarea
        value = {valorTarea}
        onChange = {capturarValor}
        placeholder = "Escribe una nueva tarea"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {cancelar}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>

    );

}

export { TareaFormulario };