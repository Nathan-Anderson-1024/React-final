import React from 'react'
import { useCart } from '../../Context/CartContext'
import './CheckoutPage.css'
import { NumericFormat } from 'react-number-format';

export default function CheckoutPage() {
    //display name price and quantity of each item
    //display total cost of the cart
    //display checkout form
    //submitting the order should clear the cart and return back to main products page.
    const {cart} = useCart();
  return (
    <div className='checkout-container'>
        <div className='checkout-form'>
            <h1>Contact Info</h1>
            <form>
                <label for='email'>* Email</label>
                <input id='email'></input>
                <label for='phone-number'>* Phone Number</label>
                <input id='phone-number'></input>
            </form>
            <h1>Shipping Info</h1>
            <form>
                <label for='f-name'>* First Name</label>
                <input id='f-name'></input>
                <label for='l-name'>* Last Name</label>
                <input id='l-name'></input>
                <label for='address-1'>* Address 1</label>
                <input id='address-1'></input>
                <label for='address-2'>Address 2</label>
                <input id='address-2'></input>
                <label for='city'>* City</label>
                <input id='city'></input>
                <label for='state'>* State</label>
                <input id='state'></input>
                <label for='zip'>* ZIP Code</label>
                <input id='zip'></input>
            </form>
            <h1>Billing Info</h1>
            <form>
                <label for='f-name-billing'>* First Name</label>
                <input id='f-name-billing'></input>
                <label for='l-name-billing'>* Last Name</label>
                <input id='l-name-billing'></input>
                <label for='address-1-billing'>* Address 1</label>
                <input id='address-1-billing'></input>
                <label for='address-2-billing'>Address 2</label>
                <input id='address-2-billing'></input>
                <label for='city-billing'>* City</label>
                <input id='city-billing'></input>
                <label for='state-billing'>* State</label>
                <input id='state-billing'></input>
                <label for='zip-billing'>* ZIP Code</label>
                <input id='zip-billing'></input>
                <p>Same as shipping?</p>
            </form>
            <h1>Payment Info</h1>
            <form>
                <label for='card-number'>* Credit Card Number</label>
                <input id='card-number'></input>
                <label for='card-name'>* Cardholder Name</label>
                <input id='card-name'></input>
                <label for='exp-date'>* Expiration Date</label>
                <input id='exp-date' placeholder='MM/YY'></input>
                <label for='security-code'>* Security Code</label>
                <input id='security-code'></input>
            </form>
        </div>
        <div>
            <div className='checkout-right'>
                <div className='checkout-subtotal'>
                    <h1>Order Summary</h1>
                    <p>Subtotal</p>
                    <p>Shipping</p>
                    <p>Shipping Discount</p>
                    <p>Tax:</p>
                    <p>Order Total:</p>
                </div>
                <div className='checkout-cart'>
                    <h1>Shopping Bag</h1>
                    {cart.map((items) => {
                        return (
                            <div key={items.id}>
                                <p>{items.item}</p>
                                <div className='checkout-item-info'>
                                    <img src={items.img} style={{height: '150px'}} alt={items.item}></img>
                                    <p>Quantity: {items.quantity}</p>
                                    <NumericFormat value={items.totalCost} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
