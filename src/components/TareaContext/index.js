import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TareaContext = React.createContext();

function TareaProvider(props){

    const ID_STORAGE = 'TAREAS_V1';

    const {
        item: tareas,
        guardarItem: guardarTareas,
        loading,
        error
      } = useLocalStorage(ID_STORAGE, []);
    
      const [valorTarea, setValorTarea] = React.useState('');
    
      const tareasCompletas = tareas.filter(tarea => tarea.completada === true).length;
      const totalTareas = tareas.length;
    
    
      let tareasFiltradas = [];
      if (valorTarea.length !== 0){
        tareasFiltradas = tareas.filter(tarea => {
          const tareaDesc = tarea.desc.toUpperCase();
          const tareaBuscada = valorTarea.toUpperCase();
          return tareaDesc.includes(tareaBuscada);
        });
      } else {
        tareasFiltradas = tareas;
      }
    
    
    
    
      const completarTarea = (id) =>{
        const tareaindex = tareas.findIndex(tarea => tarea.id === id);
        const nuevasTareas = [...tareas];
    
        nuevasTareas[tareaindex].completada 
        = nuevasTareas[tareaindex].completada ? false : true;
    
        guardarTareas(nuevasTareas);
      }
    
      const borrarTarea = (id) =>{
        const tareaindex = tareas.findIndex(tarea => tarea.id === id);
        const nuevasTareas = [...tareas];
    
        nuevasTareas.splice(tareaindex, 1);
    
        guardarTareas(nuevasTareas);
      }

    return(
        <TareaContext.Provider value={{
            tareasCompletas,
            totalTareas,

            valorTarea,
            setValorTarea,

            tareasFiltradas,

            completarTarea,
            borrarTarea,

            loading,
            error,


        }}>
            {props.children}
        </TareaContext.Provider>

    );


}
export { TareaContext, TareaProvider };

