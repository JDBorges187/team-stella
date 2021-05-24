import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const CheckoutForm = () => {
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const submitCheckout = (e) => {
        e.preventDefault();
        history.push('/')
    }
    return (
        <>
            <h1>Checkout Page</h1>
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
                <button type='submit'>Checkout</button>
            </form>
        </>
    )
}

export default CheckoutForm;
