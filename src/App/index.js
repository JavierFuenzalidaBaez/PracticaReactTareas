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




function useLocalStorage(NombreStorage, Valorinicial) {

  const localStorageItem = localStorage.getItem(NombreStorage);
  let parseItem;

  if (!localStorageItem){
    localStorage.setItem(NombreStorage, JSON.stringify(Valorinicial));
    parseItem = Valorinicial;
  } else {
    parseItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parseItem);

  const guardarItem = (nuevasItem) =>{
    const strItem = JSON.stringify(nuevasItem);
    localStorage.setItem(NombreStorage, strItem);
    setItem(nuevasItem);
  };

  return [
    item,
    guardarItem
  ]


}


const ID_STORAGE = 'TAREAS_V1';

function App() {

  const [tareas, guardarTareas] = useLocalStorage(ID_STORAGE, []);
  
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
