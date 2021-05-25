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
                <form onSubmit={submitCheckout}>
                    <div>
                        {errors.map((error) => (
                            <div>{error}</div>
                            ))}
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input name='address' type='text' value={address} onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='city'>City</label>
                        <input name='city' type='text' value={city} onChange={e => setCity(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='country'>Country</label>
                        <input name='country' type='text' value={country} onChange={e => setCountry(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='state'>State</label>
                        <input name='state' type='text' value={state} onChange={e => setState(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='zip'>Zipcode</label>
                        <input name='zip' type='text' value={zipcode} onChange={e => setZipcode(e.target.value)}/>
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
