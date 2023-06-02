import React,{ useState, useRef } from 'react';
import { CancionesData } from './CancionesData'
import './Canciones.css'


function FotoIndividual() {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }

    return (
        <React.Fragment>
            {
                CancionesData.map(cancion => {
                    return (
                        <div className='ContainerCancion' key={cancion}>
                            <img src={cancion.imgSrc} alt={cancion.title} />
                            <h2>{cancion.title}</h2>
                            <div className='ContainerTexto'>
                                <p>
                                    {cancion.texto}
                                </p>
                                <div>
                                    <button className='boton' onClick={togglePlay}>
                                        {isPlaying ? 'Pausar' : 'Reproducir'}
                                    </button>
                                    <audio ref={audioRef} src={cancion.audio} />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}

export default FotoIndividual;