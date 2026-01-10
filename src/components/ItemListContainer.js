import React from 'react';

// Recibimos la prop 'greeting'
const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="card shadow p-4">
            {/* Renderizamos el mensaje que viene por props */}
            <h2 className="text-primary">{greeting}</h2>
            <p className="text-muted">Próximamente aquí verás nuestro catálogo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;