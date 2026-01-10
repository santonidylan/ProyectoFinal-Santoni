import React from 'react';
/* IMPORTANTE: 
  Como estamos en 'src/', usamos './components/...' para entrar a la carpeta.
*/
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a la Tienda de Santoni!" />
    </div>
  );
}

export default App;