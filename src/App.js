import React from 'react';
// Fíjate que aquí dice './components/...' en minúsculas
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