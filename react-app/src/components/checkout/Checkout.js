import React, { useEffect } from 'react'
import './Checkout.css'
import CheckoutForm from './CheckoutForm'
import CheckoutList from './CheckoutList'
const Checkout = () => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (
        <>
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
