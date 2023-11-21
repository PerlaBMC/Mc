import React from 'react';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=5519126641&text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button className='btnWhatsUp'><i className="bi bi-whatsapp"></i></button>
    </a>
  );
};

export default WhatsAppButton;