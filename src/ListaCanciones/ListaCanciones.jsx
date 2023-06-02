import React from 'react';
import Canciones from './../Canciones/Canciones'
import './ListaCanciones.css'

const ListaCanciones = () => {
    return ( 
        <div className='CancionesContainer'>
            <h1>Canciones De Nuestra Relacion</h1>
            <div className='ContainerCanciones'>
                <Canciones/>
            </div>
        </div>
     );
}
 
export default ListaCanciones;