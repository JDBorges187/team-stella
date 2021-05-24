import React from 'react'
import CheckoutItem from './CheckoutItem'

const CheckoutList = () => {
    return (
        <>
            <ul className='checkout-list'>
                <li><CheckoutItem name='Product 1' price={20.00}/></li>
                <li><CheckoutItem name='Product 2' price={25.00}/></li>
            </ul>

            <div className='divider'/>

            <table className='price-display'>
                <tbody>
                    <tr>
                        <th>Total: </th>
                        <td>
                            <span>Insert price here</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CheckoutList;
