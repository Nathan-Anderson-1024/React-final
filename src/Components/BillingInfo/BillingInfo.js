import React from "react";

export default function BillingInfo() {
  return (
    <div className="payment-info-wrapper">
      <h1>Billing</h1>
      <form>
        <div className="name-container">
          <div className="form-info">
            <label for="f-name-billing">* First Name</label>
            <input id="f-name-billing" required></input>
          </div>
          <div className="form-info">
            <label for="l-name-billing">* Last Name</label>
            <input id="l-name-billing" required></input>
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label for="address-1-billing">* Address 1</label>
            <input id="address-1-billing" required></input>
          </div>
          <div className="form-info">
            <label for="address-2-billing">Address 2</label>
            <input id="address-2-billing"></input>
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label for="city-billing">* City</label>
            <input id="city-billing" required></input>
          </div>
          <div className="form-info">
            <label for="state-billing">* State</label>
            <input id="state-billing" required></input>
          </div>
          <div className="form-info">
            <label for="zip-billing">* ZIP Code</label>
            <input id="zip-billing" required></input>
          </div>
        </div>
        
      </form>
    </div>
  );
}
