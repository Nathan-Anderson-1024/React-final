import React from "react";

export default function ShippingInfo({ shipping, setShipping}) {
  //handle shipping inputs
  return (
    <div className="payment-info-wrapper">
      <h1>Shipping</h1>
      <div className="checkout-shipping-form">
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="f-name">
              <span className="required">*</span> First Name
            </label>
            <input id="f-name" required onChange={(event) => setShipping(previousValue => ({...previousValue, firstName: event.target.value}))}></input>
          </div>
          <div className="form-info">
            <label htmlFor="l-name">
              <span className="required">*</span> Last Name
            </label>
            <input id="l-name" required onChange={(event) => setShipping(previousValue => ({...previousValue, lastName: event.target.value}))}></input>
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="address-1">
              <span className="required">*</span> Address 1
            </label>
            <input id="address-1" required onChange={(event) => setShipping(previousValue => ({...previousValue, address: event.target.value}))}></input>
          </div>
          <div className="form-info">
            <label htmlFor="address-2">Address 2</label>
            <input id="address-2" onChange={(event) => setShipping(previousValue => ({...previousValue, addressTwo: event.target.value}))}></input>
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="city">
              <span className="required">*</span> City
            </label>
            <input id="city" required onChange={(event) => setShipping(previousValue => ({...previousValue, city: event.target.value}))}></input>
          </div>
          <div className="form-info">
            <label htmlFor="state">
              <span className="required">*</span> State
            </label>
            <input id="state" required onChange={(event) => setShipping(previousValue => ({...previousValue, state: event.target.value}))}></input>
          </div>
          <div className="form-info">
            <label htmlFor="zip">
              <span className="required">*</span> ZIP Code
            </label>
            <input id="zip" required onChange={(event) => setShipping(previousValue => ({...previousValue, zipCode: event.target.value}))}></input>
          </div>
        </div>
        <div className="name-container">
          <input
            id="reuse-address"
            type="checkbox"
            value="Same as Shipping Address?"
            onClick={() => setShipping(previousValue => ({...previousValue, sameBilling: !previousValue.sameBilling}))}
          ></input>
          <label htmlFor="reuse-address">Use as Billing Address?</label>
        </div>
      </div>
    </div>
  );
}
