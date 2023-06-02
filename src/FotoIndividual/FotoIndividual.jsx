import React from 'react';
import {fotosDatos} from './DatosFotos'
import './FotoIndividual.css'



function FotoIndividual() {

    return (
        <React.Fragment>
            {
                fotosDatos.map(foto => {
                    return (
                        <div className='ContainerFoto' key={foto.id}>
                          <img src={foto.imgSrc} />
                          <h2>{foto.title}</h2>
                          <p>
                            {foto.texto}
                          </p>
                      </div> 
                    )
                })
            }
        </React.Fragment>
    )
}

export default FotoIndividual;