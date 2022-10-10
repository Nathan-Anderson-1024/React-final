import React from "react";

export default function BillingInfo({shipping, setShipping}) {
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
            { shipping.sameBilling && <input id="f-name-billing" required value={shipping.firstName} onChange={(event) => setShipping(previousValue => ({...previousValue, firstName: event.target.value}))}></input>}
          </div>
          <div className="form-info">
            <label htmlFor="l-name-billing">
              <span className="required">*</span> Last Name
            </label>
            { !shipping.sameBilling && <input id="l-name-billing" required></input>}
            { shipping.sameBilling && <input id="l-name-billing" required value={shipping.lastName} onChange={(event) => setShipping(previousValue => ({...previousValue, lastName: event.target.value}))}></input>}
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="address-1-billing">
              <span className="required">*</span> Address 1
            </label>
            { !shipping.sameBilling && <input id="address-1-billing" required></input>}
            { shipping.sameBilling && <input id="address-1-billing" required value={shipping.address} onChange={(event) => setShipping(previousValue => ({...previousValue, address: event.target.value}))}></input>}
          </div>
          <div className="form-info">
            <label htmlFor="address-2-billing">Address 2</label>
            { !shipping.sameBilling && <input id="address-2-billing"></input>}
            { shipping.sameBilling && <input id="address-2-billing" value={shipping.addressTwo} onChange={(event) => setShipping(previousValue => ({...previousValue, addressTwo: event.target.value}))}></input>}
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="city-billing">
              <span className="required">*</span> City
            </label>
            { !shipping.sameBilling && <input id="city-billing" required></input>}
            { shipping.sameBilling && <input id="city-billing" required value={shipping.city} onChange={(event) => setShipping(previousValue => ({...previousValue, city: event.target.value}))}></input>}
          </div>
          <div className="form-info">
            <label htmlFor="state-billing">
              <span className="required">*</span> State
            </label>
            { !shipping.sameBilling && <input id="state-billing" required></input>}
            { shipping.sameBilling && <input id="state-billing" required value={shipping.state} onChange={(event) => setShipping(previousValue => ({...previousValue, state: event.target.value}))}></input>}
          </div>
          <div className="form-info">
            <label htmlFor="zip-billing">
              <span className="required">*</span> ZIP Code
            </label>
            { !shipping.sameBilling && <input id="zip-billing" required></input>}
            { shipping.sameBilling && <input id="zip-billing" required value={shipping.zipCode} onChange={(event) => setShipping(previousValue => ({...previousValue, zipCode: event.target.value}))}></input>}
          </div>
        </div>
      </div>
    </div>
  );
}
