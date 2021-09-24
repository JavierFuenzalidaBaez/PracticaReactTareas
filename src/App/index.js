import React from 'react';
import { TareaProvider } from '../components/TareaContext';
import { AppUI } from './AppUI'
import './App.css'


function App() {

  return (
    <TareaProvider>
      <AppUI/>
    </TareaProvider>
  );
}

export default App;
