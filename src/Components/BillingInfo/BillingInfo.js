import React from "react";

export default function BillingInfo({shipping}) {
  return (
    <div className="payment-info-wrapper">
      <h1>Billing</h1>
      <div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="f-name-billing">
              <span className="required">*</span> First Name
            </label>
            { !shipping.sameBilling && <input id="f-name-billing" required></input>}
            { shipping.sameBilling && <input id="f-name-billing" required value={shipping.firstName}></input>}
          </div>
          <div className="form-info">
            <label htmlFor="l-name-billing">
              <span className="required">*</span> Last Name
            </label>
            { !shipping.sameBilling && <input id="l-name-billing" required></input>}
            { shipping.sameBilling && <input id="l-name-billing" required value={shipping.lastName}></input>}
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="address-1-billing">
              <span className="required">*</span> Address 1
            </label>
            { !shipping.sameBilling && <input id="address-1-billing" required></input>}
            { shipping.sameBilling && <input id="address-1-billing" required value={shipping.address}></input>}
          </div>
          <div className="form-info">
            <label htmlFor="address-2-billing">Address 2</label>
            { !shipping.sameBilling && <input id="address-2-billing"></input>}
            { shipping.sameBilling && <input id="address-2-billing" value={shipping.addressTwo}></input>}
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="city-billing">
              <span className="required">*</span> City
            </label>
            { !shipping.sameBilling && <input id="city-billing" required></input>}
            { shipping.sameBilling && <input id="city-billing" required value={shipping.city}></input>}
          </div>
          <div className="form-info">
            <label htmlFor="state-billing">
              <span className="required">*</span> State
            </label>
            { !shipping.sameBilling && <input id="state-billing" required></input>}
            { shipping.sameBilling && <input id="state-billing" required value={shipping.state}></input>}
          </div>
          <div className="form-info">
            <label htmlFor="zip-billing">
              <span className="required">*</span> ZIP Code
            </label>
            { !shipping.sameBilling && <input id="zip-billing" required></input>}
            { shipping.sameBilling && <input id="zip-billing" required value={shipping.zipCode}></input>}
          </div>
        </div>
      </div>
    </div>
  );
}
