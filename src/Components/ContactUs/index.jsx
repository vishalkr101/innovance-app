import React from "react";
import MapWithLocation from "../MapWithLocation";
import ContactUsForm from "../ContactUsForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const ContactUs = () => {
  return (
    <div className="contact-us-section-container mt-44">
      <div className="contact-us-section h-24 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-white">
          Find us here <FontAwesomeIcon icon={faLocationDot} />
        </h1>
      </div>
      <MapWithLocation />
      <ContactUsForm />
    </div>
  );
};

export default ContactUs;
