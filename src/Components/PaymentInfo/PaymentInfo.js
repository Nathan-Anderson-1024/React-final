import React from "react";

export default function PaymentInfo() {
  return (
    <div className="payment-info-wrapper">
      <h1>Payment</h1>
      <form>
        <div className="name-container">
            <div className="form-info">
                <label for="card-name">* Cardholder Name</label>
                <input id="card-name"></input>
            </div>
        </div>
        <div className="name-container">
            <div className="form-info">
                <label for="card-number">* Credit Card Number</label>
                <input id="card-number"></input>
            </div>
            <div className="form-info">
                <label for="exp-date">* Expiration Date</label>
                <input id="exp-date" placeholder="MM/YY"></input>
            </div>
        </div>
        <div className="name-container">
            <div className="form-info">
                <label for="security-code">* Security Code</label>
                <input id="security-code"></input>
            </div>
        </div>
      </form>
    </div>
  );
}
