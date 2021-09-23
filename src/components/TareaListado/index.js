import React from "react";

import './TareaListado.css';

function TareaListado(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TareaListado };