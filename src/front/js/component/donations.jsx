import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';

export const Donations = () => {
  const handleDonate = () => {
    
    const paypalDonateURL = 'https://www.paypal.com/donate/?hosted_button_id=L2RRCR8D6RBM6';
    window.open(paypalDonateURL, '_blank');
  };

  return (
    <div className="donations-area">
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div className="text-left pe-5 me-5">
        <h1 className="animated-text">Crezcamos juntos.</h1>
          <h5 className="fade-up">Tu contribución hace posible que sigamos brindando <br /><strong>servicios de calidad</strong> y <strong>contenidos valiosos.</strong> <br /> 
            Al donar, estás invirtiendo en nuestro propósito, <br /> nos ayudas a crecer y mejorar continuamente.</h5>
        </div>
        <div className="text-right ps-5">
          <button className="animated-btn btn btn-light btn-lg p-3 rounded-4" onClick={handleDonate}>
            Donar aqui: <FontAwesomeIcon icon={faCcPaypal} style={{ color: "#000000", fontSize: "3rem", verticalAlign: "middle" }} className="ps-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donations;