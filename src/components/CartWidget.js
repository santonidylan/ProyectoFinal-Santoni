import React from 'react';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center">
      <span style={{ fontSize: '1.5rem', cursor: 'pointer' }}>🛒</span>
      <span className="badge bg-danger ms-1">0</span>
    </div>
  );
}

export default CartWidget;
