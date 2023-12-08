import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
  const [animationsCompleted, setAnimationsCompleted] = useState(false);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAnimationsCompleted(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const textCenterClasses = `text-center ${animationsCompleted ? 'move-left' : ''}`;

  return (
    <div className="contact-container container-fluid vh-100 d-flex align-items-center justify-content-center">
    <div className={`${textCenterClasses}`}>
      <div>
        <h1 className="fade-down mb-4">Siguenos!</h1>
        <h5 className="fade-up mb-5">Descubre experiencias únicas y mantente al tanto <br />de las últimas novedades al<br /> seguirnos en nuestras redes sociales. <br />
          Te podrás contactar con nosotros mediante estas redes! </h5>
      </div>
    </div>
    <div className="text-end pe-3 mt-3 ms-5 ps-5">
  <div className="fade-left-icons mb-5">
    <a href="https://twitter.com/RggnAventuras" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faXTwitter} size="7x" style={{ color: 'white' }}/>
    </a>
  </div>
  <div className="fade-left-icons">
    <a href="https://www.instagram.com/rggnav/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} size="8x" style={{ color: 'white' }} />
    </a>
  </div>
</div>
  </div>
);
};


      export default Contact