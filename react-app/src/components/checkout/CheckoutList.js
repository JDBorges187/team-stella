import React from 'react';
import CheckoutItem from './CheckoutItem';
import {useSelector} from 'react-redux';

//Will want to get list of products from redux store
const CheckoutList = () => {
    let totalPrice = 135.00;
    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products);

    console.log(products);
    const itemKeys = (cart !== null) ? Object.keys(cart) : [];

    return (
        <>
            <ul className='checkout-list'>
                {itemKeys.map((item, idx) => {
                    let product = products[item];
                    console.log(product);
                    return (<li key={idx}>
                        <CheckoutItem
                            name={product.name}
                            quantity={cart[item]}
                            price={product.price * cart[item]}/>
                    </li>)
                })}
            </ul>

            <div className='divider'/>

            <table className='price-display'>
                <tbody>
                    <tr>
                        <th>Total: </th>
                        <td>
                            <span>${totalPrice.toFixed(2)}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CheckoutList;
