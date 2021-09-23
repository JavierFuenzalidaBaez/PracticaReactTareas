import React from 'react';
import { AppUI } from './AppUI'
import './App.css'

/* const tareasS = [
  {
    id: '1',
    desc: 'tarea 1',
    completada: true
  },
  {
    id: '2',
    desc: 'tarea 2',
    completada: false
  },
  {
    id: '3',
    desc: 'tarea 3',
    completada: true
  }
];  */

const ID_STORAGE = 'TAREAS_V1';

function App() {

  const localStorageTareas = localStorage.getItem(ID_STORAGE);
  let parseTareas;

  if (!localStorageTareas){
    localStorage.setItem(ID_STORAGE, JSON.stringify([]));
    parseTareas = [];
  } else {
    parseTareas = JSON.parse(localStorageTareas);
  }

  const [tareas, setTareas] = React.useState(parseTareas);
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


  const guardarCambiosTareas = (nuevasTareas) =>{
    const strTareas = JSON.stringify(nuevasTareas);
    localStorage.setItem(ID_STORAGE, strTareas);
    setTareas(nuevasTareas);
  };

  const completarTarea = (id) =>{
    const tareaindex = tareas.findIndex(tarea => tarea.id === id);
    const nuevasTareas = [...tareas];

    nuevasTareas[tareaindex].completada 
    = nuevasTareas[tareaindex].completada ? false : true;

    guardarCambiosTareas(nuevasTareas);
  }

  const borrarTarea = (id) =>{
    const tareaindex = tareas.findIndex(tarea => tarea.id === id);
    const nuevasTareas = [...tareas];

    nuevasTareas.splice(tareaindex, 1);

    guardarCambiosTareas(nuevasTareas);
  }

  return (
    <AppUI
      tareasCompletas={tareasCompletas}
      totalTareas={totalTareas}

      valorTarea={valorTarea}
      setValorTarea={setValorTarea}

      tareasFiltradas={tareasFiltradas}

      completarTarea={completarTarea}
      borrarTarea={borrarTarea}
    />
  );
}

export default App;
