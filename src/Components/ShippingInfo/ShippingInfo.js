import React from "react";

export default function ShippingInfo() {
  return (
    <div className="payment-info-wrapper">
      <h1>Shipping</h1>
      <form className="checkout-shipping-form">
        <div className="name-container">
            <div className="form-info">
                <label for="f-name"><span className="required">*</span> First Name</label>
                <input id="f-name" required></input>
            </div>
            <div className="form-info">
                <label for="l-name"><span className="required">*</span> Last Name</label>
                <input id="l-name" required></input>
            </div>
        </div>
        <div className="name-container">
            <div className="form-info">
                <label for="address-1"><span className="required">*</span> Address 1</label>
                <input id="address-1" required></input>
            </div>
            <div className="form-info">
                <label for="address-2">Address 2</label>
                <input id="address-2"></input>
            </div>
        </div>
        <div className="name-container">
            <div className="form-info">
                <label for="city"><span className="required">*</span> City</label>
                <input id="city" required></input>
            </div>
            <div className="form-info">
                <label for="state"><span className="required">*</span> State</label>
                <input id="state" required></input>
            </div>
            <div className="form-info">
                <label for="zip"><span className="required">*</span> ZIP Code</label>
                <input id="zip" required></input>
            </div>
        </div>
        <div className="name-container">
            <input id='reuse-address' type='checkbox' value='Same as Shipping Address?'></input>
            <label for='reuse-address'>Use as Billing Address?</label>
        </div>
      </form>
    </div>
  );
}
