import React from 'react';
import Header from '../Header/Header';
import Galeria from '../Galeria/Galeria';
import Carta from '../Carta/Carta';
import ListaCanciones from '../ListaCanciones/ListaCanciones';
import "./App.css"

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Galeria/>
      <Carta/>
      <ListaCanciones/>
    </React.Fragment>
  );
}

export default App;
