import React from "react";

export default function ContactInfo() {
  return (
    <div className="payment-info-wrapper">
      <h1>Contact Info</h1>
      <form className="checkout-contact-form">
        <div className="form-info">
            <label for="email"><span className="required">*</span> Email</label>
            <input id="email" type='email' required></input>
        </div>
        <div className="form-info">
            <label for="phone-number"><span className="required">*</span> Phone Number</label>
            <input id="phone-number" type='tel' required></input>
        </div>
      </form>
    </div>
  );
}
