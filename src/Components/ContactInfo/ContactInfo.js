import React from "react";
import './ContactInfo.css'
export default function ContactInfo() {
  return (
    <div className="payment-info-wrapper">
      <h1>Contact Info</h1>
      <div className="checkout-contact-form">
        <div className="form-info">
          <label htmlFor="email">
            <span className="required">*</span> Email
          </label>
          <input id="email" type="email" required></input>
        </div>
        <div className="form-info">
          <label htmlFor="phone-number">
            <span className="required">*</span> Phone Number
          </label>
          <input id="phone-number" type="tel" required></input>
        </div>
      </div>
    </div>
  );
}
