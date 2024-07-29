import React from 'react';
import { Icon } from "@iconify/react";
import "./whatsapp.css"

const WhatsAppButton = () => {
  const phoneNumber = ""; // Include country code without +
  const message = "Hello, I have a question about your services.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <Icon icon="logos:whatsapp" />
    </a>
  );
};

export default WhatsAppButton;
