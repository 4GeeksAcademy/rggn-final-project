import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival, faUser, faUsers, faBriefcase, faBriefcaseClock } from '@fortawesome/free-solid-svg-icons';
import arg from '../../img/arg.jpg';
import arg2 from '../../img/arg2.jpg';
import ecua2 from '../../img/ecua2.jpg';
import chile from '../../img/chile.jpg';
import brasil from '../../img/brasil.jpg';


const estiloFondo = {
  background: 'linear-gradient(to bottom, black, blue)',
  height: '180vh',
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
            <h2 className="card-text mt-3">Aventurate!</h2>
            <h5 className="card-text text-center mt-3">Da el salto de una vez!<br></br><br></br>Explora más, preocúpate menos</h5>
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
              <FontAwesomeIcon icon={faBriefcaseClock} style={{ color: "#fafafa", fontSize: "3rem" }} />
            ) : (
              <FontAwesomeIcon icon={faBriefcase} style={{ color: "#ffffff", fontSize: "3rem" }} />
            )}
            <h2 className="card-text mt-3">Ágil</h2>
            <h5 className="card-text text-center mt-3">Ahorramos tu tiempo<br></br><br></br>Menos esperas, más experiencias</h5>
          </div>
        </div>
      </div>

    </div>
    <h1 className="text-center mt-5 pt-5">Nuestros destinos disponibles!</h1>
    <section className="mt-5">
      <img src={arg} alt="" />
      <img src={arg2} alt="" />
      <img src={ecua2} alt="" />
      <img src={chile} alt="" />
      <img src={brasil} alt="" />
    </section>
  </div>
);
}

export default Services;