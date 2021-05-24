import React from 'react'

const CheckoutList = () => {
    return (
        <>
            <ul className='checkout-list'>
                <li>Product 1</li>
                <li>Product 2</li>
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
