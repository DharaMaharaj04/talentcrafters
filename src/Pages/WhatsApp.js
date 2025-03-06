import React from "react";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const WhatsAppChat = () => {
  return (
    <WhatsAppWidget
      phoneNumber="9558559686" 
      companyName="Talent Crafters"
      message="Hello! How can we assist you today?"
    />
  );
};

export default WhatsAppChat;