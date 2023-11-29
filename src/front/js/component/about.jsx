import React from 'react';
import aboutImage from '../../img/about.jpg';

const backgroundStyle = {
  backgroundImage: `url(${aboutImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'start',
  padding: '50px',
  fontFamily: 'Unbounded, sans-serif',
};

export const About = () => {
  return (
    <div style={backgroundStyle} className="text-white">
      <h1 className="mt-5 pt-2">CREAMOS TU AVENTURA</h1>
      <p className="mt-4">
        Explora el mundo con nosotros y descubre experiencias inolvidables.<br></br>
        Desde rincones remotos hasta ciudades vibrantes, <br></br>
        estamos aquí para inspirarte y facilitar tus aventuras. <br></br>
        Descubre el mundo con RGGN!</p>

        <h1 className="d-flex justify-content-end me-5">QUIENES SOMOS?</h1>
        <p className="d-flex justify-content-end me-3"> Somos un equipo pequeño con un gran propósito.<br></br> 
        Te ayudamos a descubrir tu destino perfecto. <br></br>
        Simplificamos el proceso para que tu <br></br>
        experiencia sea única y sin complicaciones. </p>
    </div>
  );
};

export default About;