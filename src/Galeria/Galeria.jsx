import React from 'react';
import './Galeria.css';
import FotoIndividual from '../FotoIndividual/FotoIndividual';
const Galeria = () => {
    
    return ( 
        <div className='ContainerGaleria'>
            <h2>Galeria con mi novia hermosa</h2>
            <div className='ContainerGaleriaFotos'>
                <FotoIndividual/>
            </div>
        </div>
     );
}
 
export default Galeria;