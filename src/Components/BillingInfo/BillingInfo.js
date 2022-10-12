import React from "react";

export default function BillingInfo({shipping, setShipping, setBilling, billing}) {
  return (
    <div className="payment-info-wrapper">
      <h1>Billing</h1>
      <div className="checkout-billing-form">
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="f-name-billing">
              <span className="required">*</span> First Name
            </label>
            { !shipping.sameBilling && <input id="f-name-billing" required defaultValue={billing.firstName} onChange={(event) => setBilling(previousValue => ({...previousValue, firstName: event.target.value}))}></input>}
            { shipping.sameBilling && <input id="f-name-billing" required value={shipping.firstName} readOnly ></input>}
          </div>
          <div className="form-info">
            <label htmlFor="l-name-billing">
              <span className="required">*</span> Last Name
            </label>
            { !shipping.sameBilling && <input id="l-name-billing" required defaultValue={billing.lastName} onChange={(event) => setBilling(previousValue => ({...previousValue, lastName: event.target.value}))}></input>}
            { shipping.sameBilling && <input id="l-name-billing" required value={shipping.lastName} readOnly ></input>}
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="address-1-billing">
              <span className="required">*</span> Address 1
            </label>
            { !shipping.sameBilling && <input id="address-1-billing" required defaultValue={billing.address} onChange={(event) => setBilling(previousValue => ({...previousValue, address: event.target.value}))}></input>}
            { shipping.sameBilling && <input id="address-1-billing" required value={shipping.address} readOnly ></input>}
          </div>
          <div className="form-info">
            <label htmlFor="address-2-billing">Address 2</label>
            { !shipping.sameBilling && <input id="address-2-billing" defaultValue={billing.addressTwo} onChange={(event) => setBilling(previousValue => ({...previousValue, addressTwo: event.target.value}))}></input>}
            { shipping.sameBilling && <input id="address-2-billing" value={shipping.addressTwo} readOnly ></input>}
          </div>
        </div>
        <div className="name-container">
          <div className="form-info">
            <label htmlFor="city-billing">
              <span className="required">*</span> City
            </label>
            { !shipping.sameBilling && <input id="city-billing" required defaultValue={billing.city} onChange={(event) => setBilling(previousValue => ({...previousValue, city: event.target.value}))}></input>}
            { shipping.sameBilling && <input id="city-billing" required value={shipping.city} readOnly ></input>}
          </div>
          <div className="form-info">
            <label htmlFor="state-billing">
              <span className="required">*</span> State
            </label>
            { !shipping.sameBilling && <input id="state-billing" required defaultValue={billing.state} onChange={(event) => setBilling(previousValue => ({...previousValue, state: event.target.value}))}></input>}
            { shipping.sameBilling && <input id="state-billing" required value={shipping.state} readOnly ></input>}
          </div>
          <div className="form-info">
            <label htmlFor="zip-billing">
              <span className="required">*</span> ZIP Code
            </label>
            { !shipping.sameBilling && <input id="zip-billing" required defaultValue={billing.zipCode} onChange={(event) => setBilling(previousValue => ({...previousValue, zipCode: event.target.value}))}></input>}
            { shipping.sameBilling && <input id="zip-billing" required value={shipping.zipCode} readOnly></input>}
          </div>
        </div>
      </div>
    </div>
  );
}
