import React from 'react';


const estiloFondo = {
    background: 'linear-gradient(to bottom, #95a5a6, #d35400)', 
    height: '150vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

export const Services = () => {
  return (
    <div style={estiloFondo} className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h2 className='mb-4'>Explora tu Mundo Interior</h2>
      <h4>Únete a la comunidad, comparte experiencias</h4>
    </div>
  );
}

export default Services;