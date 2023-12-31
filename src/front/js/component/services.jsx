import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival, faUser, faUsers, faChalkboardUser, faChalkboard } from '@fortawesome/free-solid-svg-icons';


const estiloFondo = {
  background: 'linear-gradient(to bottom, black, blue)',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

export const Services = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div style={estiloFondo} className="d-flex flex-column align-items-center justify-content-center text-white">
    <h1 className='animated-text mb-5 pb-3'>Explora tu Mundo Interior</h1>
    <h4 className='mb-5 pb-5 fade-up'>Únete a la comunidad, comparte experiencias</h4>

    <div className="row">
      <div className="col-md-4 pe-3">
        <div
          className="fade-right card bg-dark text-white rounded-5"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
            {isHovered1 ? (
              <FontAwesomeIcon icon={faPlaneArrival} style={{ color: "#fafafa", fontSize: "3rem" }} />
            ) : (
              <FontAwesomeIcon icon={faPlaneDeparture} style={{ color: "#ffffff", fontSize: "3rem" }} />
            )}
            <h2 className="card-text mt-3">Aventurate</h2>
            <h5 className="card-text text-center mt-3">Da el salto de una vez!<br></br><br></br>Explora más, preocúpate menos.</h5>
          </div>
        </div>
      </div>

      <div className="col-md-4 pe-3">
        <div
          className="fade-up card bg-dark text-white rounded-5"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
            {isHovered2 ? (
              <FontAwesomeIcon icon={faUsers} style={{ color: "#fafafa", fontSize: "3rem" }} />
            ) : (
              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", fontSize: "3rem" }} />
            )}
            <h2 className="card-text mt-3">Comunidad</h2>
            <h5 className="card-text text-center mt-3">Únete a nuestra comunidad de viajeros<br></br><br></br>Comparte tus experiencias!</h5>
          </div>
        </div>
      </div>

      <div className="col-md-4 pe-3">
        <div
          className="fade-left card bg-dark text-white rounded-5"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <div className="card-body d-flex flex-column align-items-center justify-content-center p-4">
            {isHovered3 ? (
              <FontAwesomeIcon icon={faChalkboardUser} style={{color: "#ffffff", fontSize: "3rem" }} />
            ) : (
              <FontAwesomeIcon icon={faChalkboard} style={{color: "#ffffff", fontSize: "3rem" }} />
            )}
            <h2 className="card-text mt-3">Comparte</h2>
            <h5 className="card-text text-center mt-3">Comparte tu aventura<br></br><br></br>Haz una publicacion para insipirar!</h5>
          </div>
        </div>
      </div>

    </div>
  </div>
);
}

export default Services;