import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addItem = (item, quantity) => {
    const exists = cartItems.find(i => i.id === item.id)
    if (exists) {
      setCartItems(cartItems.map(i =>
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
      ))
    } else {
      setCartItems([...cartItems, { ...item, quantity }])
    }
  }

  const removeItem = (itemId) => setCartItems(cartItems.filter(i => i.id !== itemId))

  const clearCart = () => setCartItems([])

  const isInCart = (itemId) => cartItems.some(i => i.id === itemId)

  const totalQuantity = cartItems.reduce((acc, i) => acc + i.quantity, 0)

  const totalPrice = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, isInCart, totalQuantity, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}