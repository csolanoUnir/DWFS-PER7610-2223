import React from 'react'
import '../styles/Card.css'


export const Card = (props) => {
    return (

        <div class="card-container">
            <div className="card" >
                <img className="card-img-top" src={props.Datos.imagen} alt="imagenKotor"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.Datos.titulo}</h5>
                    <p className="card-text">{props.Datos.contenido}</p>
                </div>
            </div>
        </div>
    )
};
