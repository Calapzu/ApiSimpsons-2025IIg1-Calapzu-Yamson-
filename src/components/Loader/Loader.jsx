import React from 'react';
import '../Loader/Loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <p className="mt-3 text-light fw-bold">Cargando datos...</p>
    </div>
  );
};

export default Loader;