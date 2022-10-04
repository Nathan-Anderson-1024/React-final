import React from "react";

export default function BillingInfo() {
  return (
    <div className="payment-info-wrapper">
      <h1>Billing</h1>
      <div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="f-name-billing">
              <span className="required">*</span> First Name
            </label>
            <input id="f-name-billing" required></input>
          </div>
          <div className="form-info">
            <label htmlFor="l-name-billing">
              <span className="required">*</span> Last Name
            </label>
            <input id="l-name-billing" required></input>
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="address-1-billing">
              <span className="required">*</span> Address 1
            </label>
            <input id="address-1-billing" required></input>
          </div>
          <div className="form-info">
            <label htmlFor="address-2-billing">Address 2</label>
            <input id="address-2-billing"></input>
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="city-billing">
              <span className="required">*</span> City
            </label>
            <input id="city-billing" required></input>
          </div>
          <div className="form-info">
            <label htmlFor="state-billing">
              <span className="required">*</span> State
            </label>
            <input id="state-billing" required></input>
          </div>
          <div className="form-info">
            <label htmlFor="zip-billing">
              <span className="required">*</span> ZIP Code
            </label>
            <input id="zip-billing" required></input>
          </div>
        </div>
      </div>
    </div>
  );
}
