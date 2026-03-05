import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { createOrder } from '../services/products'

const initialForm = { name: '', lastname: '', email: '', emailConfirm: '', phone: '' }

const CheckoutForm = () => {
  const { cartItems, totalPrice, clearCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'El nombre es requerido.'
    if (!form.lastname.trim()) newErrors.lastname = 'El apellido es requerido.'
    if (!form.email.trim()) newErrors.email = 'El email es requerido.'
    if (form.email !== form.emailConfirm) newErrors.emailConfirm = 'Los emails no coinciden.'
    if (!form.phone.trim()) newErrors.phone = 'El teléfono es requerido.'
    return newErrors
  }

  const handleSubmit = async () => {
  const validationErrors = validate()
  if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return }
  setLoading(true)
  const order = {
    buyer: { name: form.name, lastname: form.lastname, email: form.email, phone: form.phone },
    items: cartItems.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
    total: totalPrice,
  }
  try {
    const id = await createOrder(order)
    setOrderId(id)
    clearCart()
  } catch (err) {
    console.error('❌ Error al crear la orden:', err)
    alert('Hubo un error al procesar la compra. Intentá de nuevo.')
  } finally {
    setLoading(false)
  }
}

  if (orderId) return (
    <div className="container">
      <div className="order-success">
        <div className="order-success__icon">🎉</div>
        <h2 className="order-success__title">¡Compra realizada!</h2>
        <p className="order-success__sub">Tu orden fue registrada exitosamente.</p>
        <div className="order-success__id">
          <span>ID de tu orden:</span>
          <code>{orderId}</code>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Guardá este código para hacer seguimiento.</p>
        <a href="/" className="btn btn-primary" style={{ width: 'auto', marginTop: '1.5rem' }}>Volver al inicio</a>
      </div>
    </div>
  )

  if (cartItems.length === 0) return (
    <div className="container">
      <div className="empty-state" style={{ marginTop: '4rem' }}>
        <span>🛒</span><p>No tenés productos para comprar.</p>
        <a href="/" className="btn btn-primary" style={{ width: 'auto', marginTop: '1rem' }}>Ver productos</a>
      </div>
    </div>
  )

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-header__title">Finalizá tu <span>compra</span></h1>
        <p className="page-header__sub">Completá tus datos para confirmar</p>
      </div>
      <div className="checkout-layout">
        <div className="checkout-form">
          {[
            { name: 'name', label: 'Nombre', placeholder: 'Juan' },
            { name: 'lastname', label: 'Apellido', placeholder: 'Pérez' },
            { name: 'email', label: 'Email', placeholder: 'juan@email.com', type: 'email' },
            { name: 'emailConfirm', label: 'Confirmar email', placeholder: 'juan@email.com', type: 'email' },
            { name: 'phone', label: 'Teléfono', placeholder: '+54 261 000 0000' },
          ].map(field => (
            <div className="form-group" key={field.name}>
              <label className="form-label">{field.label}</label>
              <input
                className={`form-input ${errors[field.name] ? 'error' : ''}`}
                name={field.name} type={field.type || 'text'}
                value={form[field.name]} onChange={handleChange}
                placeholder={field.placeholder}
              />
              {errors[field.name] && <span className="form-error">{errors[field.name]}</span>}
            </div>
          ))}
        </div>
        <aside className="cart-summary">
          <h2 className="cart-summary__title">Tu pedido</h2>
          <div className="cart-summary__rows">
            {cartItems.map(item => (
              <div key={item.id} className="cart-summary__row">
                <span>{item.name} x{item.quantity}</span>
                <span>${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="cart-summary__total">
            <span>Total</span><span>${totalPrice.toLocaleString()}</span>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '1.5rem' }} onClick={handleSubmit} disabled={loading}>
            {loading ? 'Procesando...' : 'Confirmar compra →'}
          </button>
        </aside>
      </div>
    </div>
  )
}

export default CheckoutForm