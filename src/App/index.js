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

  const [loading, setLoading] = React.useState(true);
  const [error, seterror] = React.useState(false);
  const [item, setItem] = React.useState(Valorinicial);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(NombreStorage);
        let parseItem;

        if (!localStorageItem){
          localStorage.setItem(NombreStorage, JSON.stringify(Valorinicial));
          parseItem = Valorinicial;
        } else {
          parseItem = JSON.parse(localStorageItem);
        }

        setItem(parseItem);
        setLoading(false);
      } catch(err){
        seterror(err);
      }
    }, 2000)
  });

  

  

  const guardarItem = (nuevasItem) =>{
    try {
      const strItem = JSON.stringify(nuevasItem);
      localStorage.setItem(NombreStorage, strItem);
      setItem(nuevasItem);
    } catch(err){
      seterror(err);
    }
  };

  return {
    item,
    guardarItem,
    loading,
    error
  }


}


const ID_STORAGE = 'TAREAS_V1';

function App() {

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

  return (
    <AppUI
      tareasCompletas={tareasCompletas}
      totalTareas={totalTareas}

      valorTarea={valorTarea}
      setValorTarea={setValorTarea}

      tareasFiltradas={tareasFiltradas}

      completarTarea={completarTarea}
      borrarTarea={borrarTarea}

      loading={loading}
      error={error}
    />
  );
}

export default App;
