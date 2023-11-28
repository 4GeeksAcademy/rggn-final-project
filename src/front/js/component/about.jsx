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
           <h1>CREAMOS TU AVENTURA</h1>
           <p className="mt-4">¡Bienvenido a RGGN Aventuras! <br></br>
            Explora el mundo con nosotros y descubre experiencias inolvidables.<br></br>
             Desde rincones remotos hasta ciudades vibrantes, <br></br>
             estamos aquí para inspirarte y facilitar tus aventuras. <br></br>
             Únete a nosotros y deja que la exploración comience.<br></br>
           Descubre el mundo con RGGN!</p>
        </div>
    );
};

export default About;