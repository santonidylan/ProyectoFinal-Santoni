import React from 'react';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      {/* Usamos un emoji de carrito para simplificar */}
      <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>🛒</span>
      {/* Este es el número hardcoded (fijo) como pide la consigna inicial */}
      <span className="badge bg-danger ms-1">0</span>
    </div>
  );
}

export default CartWidget;
