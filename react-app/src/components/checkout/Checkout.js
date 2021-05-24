import React from 'react'
import './Checkout.css'
import CheckoutForm from './CheckoutForm'
import CheckoutList from './CheckoutList'
const Checkout = () => {
    return (
        <>
            <h1>Checkout Page</h1>
            <div className='checkout-main-container'>
                <div className='checkout-center-container'>
                    <div className='checkout-left-container'>
                        <CheckoutForm />
                    </div>
                    <div className='checkout-right-container'>
                        <CheckoutList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
