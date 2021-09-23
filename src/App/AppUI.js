import React from "react";

import { TareasContador } from '../components/TareasContador';
import { TareaBuscar } from '../components/TareaBuscar';
import { TareaListado } from '../components/TareaListado';
import { TareaItem } from '../components/TareaItem';
import { CrearTareaBoton } from '../components/CrearTareaBoton';


function AppUI({
    tareasCompletas,
    totalTareas,
    valorTarea,
    setValorTarea,
    tareasFiltradas,
    completarTarea,
    borrarTarea,
}){
    return(
        <React.Fragment>
      <TareasContador 
        tareasCompletas={tareasCompletas}
        totalTareas={totalTareas}
      />

      <TareaBuscar
        valorTarea={valorTarea}
        setValorTarea={setValorTarea}
      />

      <TareaListado>
        {tareasFiltradas.map(tarea => (
          <TareaItem 
          key={tarea.id} 
          desc={tarea.desc}
          completada={tarea.completada}
          completarTarea={() =>completarTarea(tarea.id)}
          borrarTarea={() =>borrarTarea(tarea.id)}/>
        ))}
      </TareaListado>

      <CrearTareaBoton/>

    </React.Fragment>
    );

}

export { AppUI };