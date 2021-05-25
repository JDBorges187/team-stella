import React from 'react'
import CheckoutItem from './CheckoutItem'

//Will want to get list of products from redux store
const CheckoutList = () => {
    let totalPrice = 135.00;
    return (
        <>
            <ul className='checkout-list'>
                {/* Add a loop through products here*/}
                <li><CheckoutItem name='Product 1' quantity={1} price={20.00}/></li>
                <li><CheckoutItem name='Product 2' quantity={2} price={25.00}/></li>
                <li><CheckoutItem name='Product 3' quantity={1} price={35.00}/></li>
                <li><CheckoutItem name='Product 4' quantity={2} price={15.00}/></li>
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
