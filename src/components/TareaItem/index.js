import React from "react";
import './TareaItem.css';

function TareaItem(props){

    return(
        <li className="TodoItem">
            <span 
            className={`Icon Icon-check ${props.completada && 'Icon-check--active'}`}
            onClick={props.completarTarea}>
                √
            </span>
                <p 
                className={`TodoItem-p ${props.completada && 'TodoItem-p--complete'}`}>
                    {props.desc}
                </p>
            <span 
            className="Icon Icon-delete"
            onClick={props.borrarTarea}>
                X
            </span>
        </li>
    );
}

export { TareaItem };