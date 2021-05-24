import React from 'react'
import './Checkout.css'
import CheckoutForm from './CheckoutForm'
import CheckoutList from './CheckoutList'
const Checkout = () => {
    return (
        <>
            <h1>Checkout Page</h1>
            <div className='checkout_main_container'>
                <div className='checkout_left_container'>
                    <CheckoutForm />
                </div>
                <div className='checkout_right_container'>
                    <CheckoutList />
                </div>
            </div>
        </>
    );
}

export default Checkout;
