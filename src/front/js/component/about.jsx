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
           <h1>SOBRE NOSOTROS.</h1>
        </div>
    );
};

export default About;