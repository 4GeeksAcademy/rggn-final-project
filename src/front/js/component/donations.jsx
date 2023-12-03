import React from 'react';

export const Donations = () => {
  const handleDonate = () => {
    
    const paypalDonateURL = 'https://www.paypal.com/donate/?hosted_button_id=L2RRCR8D6RBM6';
    window.open(paypalDonateURL, '_blank');
  };

  return (
    <div>
      <h1>¡Apoya nuestra causa!</h1>
      <p>Tu contribución hace la diferencia.</p>
      <button onClick={handleDonate}>Donar con PayPal</button>
    </div>
  );
};

export default Donations;