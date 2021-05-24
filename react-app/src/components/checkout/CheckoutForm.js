import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const CheckoutForm = () => {
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const submitCheckout = (e) => {
        e.preventDefault();
        history.push('/')
    }

    const returnCart = (e) => {
        e.preventDefault();
        history.push('/cart')
    }

    return (
        <>
            <h1>Checkout Page</h1>
            <div className='checkout-form-container'>
                <form onSubmit={submitCheckout}>
                    <div>
                        {errors.map((error) => (
                            <div>{error}</div>
                            ))}
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input name='address' type='text' />
                    </div>
                    <div>
                        <label htmlFor='city'>City</label>
                        <input name='city' type='text' />
                    </div>
                    <div>
                        <label htmlFor='country'>Country</label>
                        <input name='country' type='text' />
                    </div>
                    <div>
                        <label htmlFor='state'>State</label>
                        <input name='state' type='text' />
                    </div>
                    <div>
                        <label htmlFor='zip'>Zipcode</label>
                        <input name='zip' type='text' />
                    </div>
                    <button type='submit'>Checkout</button>
                    <button onClick={returnCart}>Return to Cart</button>
                </form>
            </div>
        </>
    )
}

export default CheckoutForm;
