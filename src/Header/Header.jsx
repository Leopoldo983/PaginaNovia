import React from 'react';
import './Header.css'
import FotoConNovia from './/../Assets/Foto Con mi novia portada.jpeg'
function Header() {
    return (
        <div className='ContainerPresentacion'>
            <div className='titulo'>
                <h1>Feliz cumpleaños mi Pan de Bono, Te Amo</h1>
            </div>

            <figure>
                <img src={FotoConNovia} alt="Foto De Pareja " />
            </figure>

            <div className='texto'>
                <p>Amor, puede que no sepa cantar, o bailar, y mi letra no es tan bonita para hacerte una carta pero
                    quiero expresarte mi cariño de esta forma, jeje espero te guste mucho te amo preciosa :3
                </p>
            </div>
        </div>
    );
}

export default Header;