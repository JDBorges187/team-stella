import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

//Form is mostly just for show, db functionality would be a bonus?
const CheckoutForm = () => {
    const [errors, setErrors] = useState([]);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("")
    const history = useHistory();

    const submitCheckout = (e) => {
        e.preventDefault();
        setErrors([]);
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
                <h2>Shipping Address</h2>
                <form onSubmit={submitCheckout} className='checkout-form'>
                    <div>
                        {errors.map((error) => (
                            <div>{error}</div>
                            ))}
                    </div>
                    <div className='checkout-form-row'>
                        {/* <label htmlFor='address'>Address</label> */}
                        <input name='address' type='text' value={address} onChange={e => setAddress(e.target.value)} placeholder='Address'/>
                    </div>
                    <div className='checkout-form-row'>
                        {/* <label htmlFor='city'>City</label> */}
                        <input name='city' type='text' value={city} onChange={e => setCity(e.target.value)} placeholder='City'/>
                    </div>
                    <div className='checkout-form-row'>
                        {/* <label htmlFor='country'>Country</label> */}
                        <input name='country' type='text' value={country} onChange={e => setCountry(e.target.value)} placeholder='Country'/>
                    </div>
                    <div className='checkout-form-row'>
                        {/* <label htmlFor='state'>State</label> */}
                        <input name='state' type='text' value={state} onChange={e => setState(e.target.value)} placeholder='State'/>
                        {/* <label htmlFor='zip'>Zipcode</label> */}
                        <input name='zip' type='text' value={zipcode} onChange={e => setZipcode(e.target.value)} placeholder='Zipcode'/>
                    </div>
                    <div className='checkout-form-buttons'>
                        <button className='checkout-button' type='submit'>Checkout</button>
                        <button className='return-cart-button' onClick={returnCart}>Return to Cart</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CheckoutForm;
