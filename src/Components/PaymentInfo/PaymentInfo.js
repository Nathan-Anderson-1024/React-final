import React from "react";

export default function PaymentInfo() {
  return (
    <div className="payment-info-wrapper">
      <h1>Payment</h1>
      {/* <form> */}
      <div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="card-name">
              <span className="required">*</span> Cardholder Name
            </label>
            <input id="card-name" required></input>
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="card-number">
              <span className="required">*</span> Credit Card Number
            </label>
            <input id="card-number" required></input>
          </div>
          <div className="form-info">
            <label htmlFor="exp-date">
              <span className="required">*</span> Expiration Date
            </label>
            <input id="exp-date" placeholder="MM/YY" required></input>
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="security-code">
              <span className="required">*</span> Security Code
            </label>
            <input id="security-code" required></input>
          </div>
        </div>
      </div>

      {/* </form> */}
    </div>
  );
}
