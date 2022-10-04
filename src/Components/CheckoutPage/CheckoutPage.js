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
    const {cart, setCart, subtotal} = useCart();
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
                    <div className='checkout-flex'>
                        <p className='bold'>Subtotal:</p>
                        <NumericFormat value={`Subtotal: ${subtotal.subtotal}`} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
                    </div>
                    <div className='checkout-flex'>
                        <p className='bold'>Shipping:</p>
                        <p>FREE</p>
                    </div>
                    <div className='checkout-flex'>
                        <p className='bold'>Tax:</p>
                        <NumericFormat value={`Subtotal: ${subtotal.tax}`} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
                    </div>
                    <div className='checkout-flex'>
                        <p className='bold'>Order Total:</p>
                        <NumericFormat value={`Subtotal: ${subtotal.estimatedTotal}`} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
                    </div>
                    
                </div>
                <div className='checkout-cart'>
                    <h1>Shopping Bag</h1>
                    {cart.map((items) => {
                        return (
                            <div key={items.id} className='checkout-item-wrapper'>
                                <p className='bold'>{items.item}</p>
                                <div className='checkout-item-info'>
                                    <img src={items.img} style={{height: '150px'}} alt={items.item}></img>
                                    <p><span className='bold'>Quantity:</span> {items.quantity}</p>
                                    <span className='bold'>
                                        <NumericFormat value={items.totalCost} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalScale={2} fixedDecimalScale={true} />
                                    </span>
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
