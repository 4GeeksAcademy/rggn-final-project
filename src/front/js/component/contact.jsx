import React, { useState, useEffect } from 'react';

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
          <h5 className="fade-up mb-5">Sigue a nuestras <br /><strong>servicios de calidad</strong> y <strong>contenidos valiosos.</strong> <br /> 
            Al donar, estás invirtiendo en nuestro propósito, <br /> nos ayudas a crecer y mejorar continuamente.</h5>
        </div>
        <div className="text-right ps-5">
        </div>
      </div>
    </div>
  );
};

export default Contact;