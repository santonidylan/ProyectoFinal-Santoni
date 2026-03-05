import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckoutForm />} />
          <Route path='*' element={
            <div className="not-found">
              <h1>404</h1>
              <p>Esta página no existe.</p>
              <a href="/" className="btn btn-primary" style={{ width: 'auto', marginTop: '1rem' }}>Volver al inicio</a>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App