import React from 'react'
import { useCart } from '../../Context/CartContext'
import './CheckoutPage.css'
import { NumericFormat } from 'react-number-format';
import ContactInfo from '../ContactInfo/ContactInfo';
import ShippingInfo from '../ShippingInfo/ShippingInfo';
import BillingInfo from '../BillingInfo/BillingInfo';
import PaymentInfo from '../PaymentInfo/PaymentInfo';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
    //display name price and quantity of each item
    //display total cost of the cart
    //display checkout form
    //submitting the order should clear the cart and return back to main products page.
    const {cart, setCart} = useCart();
  return (
    <div className='checkout-container'>
        <div className='checkout-form'>
            <ContactInfo />
            <ShippingInfo />
            <BillingInfo />
            <PaymentInfo />
            <div className='checkout-submit-btn'>
                <Link to='/'>
                    <button onClick={() => setCart([])}>Submit Order!</button>
                </Link>
                
            </div>
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
