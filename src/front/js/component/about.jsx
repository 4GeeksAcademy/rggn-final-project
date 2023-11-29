import React from 'react';
import aboutImage from '../../img/about.jpg';
import carrImage1 from '../../img/carr.jpg';
import carrImage2 from '../../img/carr2.jpg';
import carrImage3 from '../../img/carr3.jpg';

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

const carouselContainerStyle = {
  position: 'fixed',
  bottom: '10px',
  left: '10px',
  maxWidth: '80vh',
  marginLeft:'17vh',
  marginBottom:'4vh',
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

        <h1 className="d-flex justify-content-end me-5 pe-5">QUIENES SOMOS?</h1>
        <p className="d-flex justify-content-end me-3 pe-5"> Somos un equipo pequeño con un gran propósito.<br></br> 
        Te ayudamos a descubrir tu destino perfecto. <br></br>
        Simplificamos el proceso para que tu <br></br>
        experiencia sea única y sin complicaciones. </p>

        <div style={carouselContainerStyle}>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carrImage1} className="d-block w-100 rounded-5" alt="Primera imagen" />
              <div className="carousel-caption d-none d-md-block">
                <p>Descubre con RGGN</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carrImage2} className="d-block w-100 rounded-5" alt="Segunda imagen" />
              <div className="carousel-caption d-none d-md-block">
                <p>Tu Viaje, Tu Estilo</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carrImage3} className="d-block w-100 rounded-5" alt="Tercera imagen" />
              <div className="carousel-caption d-none d-md-block">
                <p>Exploración Sin Límites</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
        </div>
    
  );
};

export default About;