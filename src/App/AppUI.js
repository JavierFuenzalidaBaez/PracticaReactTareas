import React from "react";
import { TareaContext } from "../components/TareaContext";

import MegamanCargando from '../img/loading.gif';
import DogeAgregar from '../img/add.gif';
import DogeError from '../img/error.gif';
import './AppUI.css'

import { TareasContador } from '../components/TareasContador';
import { TareaBuscar } from '../components/TareaBuscar';
import { TabsOpciones } from '../components/TabsOpciones';
import { TareaListado } from '../components/TareaListado';
import { TareaItem } from '../components/TareaItem';
import { CrearTareaBoton } from '../components/CrearTareaBoton';
import { TareaFormulario } from '../components/TareaFormulario';
import { Modal } from '../components/Modal';


function AppUI(){

    const {
      error,
      loading,
      tareasFiltradas,
      completarTarea,
      borrarTarea,
      openModal,
      setOpenModal
    } = React.useContext(TareaContext);

    return(
      <div
      className="Flexdiv"
      >
        <div
        className="contentTarea"
        >
          <TareasContador/>

          <TabsOpciones/>

          <TareaBuscar/>

          <TareaListado>
              {error &&
                <>
                  <img src={DogeError} alt='error' />
                  <p>ERROR AL CARGAR :(.</p>
                </>
              }
              {loading &&
                <>
                  <img src={MegamanCargando} alt='cargando...' />
                  <p>CARGANDO...</p>
                </>
              }
              {(!loading && !tareasFiltradas.length && error === false) &&
                <>
                  <img src={DogeAgregar} alt='agrega nueva tarea' />
                  <p>AGREGA UNA NUEVA TAREA.</p>
                </>
              }

              {tareasFiltradas.map(tarea => (
                <TareaItem
                  key={tarea.id}
                  desc={tarea.desc}
                  completada={tarea.completada}
                  completarTarea={() => completarTarea(tarea.id)}
                  borrarTarea={() => borrarTarea(tarea.id)} />
              ))}
          </TareaListado>

          <CrearTareaBoton
            setOpenModal={setOpenModal}
            openModal={openModal}
          />

          {openModal &&
          <Modal>
            <TareaFormulario></TareaFormulario>
          </Modal>
          }

      </div>
    </div>
    );

}

export { AppUI };