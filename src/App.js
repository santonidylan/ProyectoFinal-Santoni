import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Ruta raíz: Muestra todos los productos */}
          <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
          
          {/* Ruta categoría: Filtra por tipo [cite: 45] */}
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoría'}/>}/>
          
          {/* Ruta detalle: Muestra un solo producto */}
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          
          {/* Ruta 404: Por si escriben mal la url [cite: 46] */}
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;