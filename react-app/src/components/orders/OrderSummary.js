import React from 'react';

const OrderSummary = ({order}) => {
    console.log(order)
    return (
        <div className='order-summary-container'>
            {order && (<div>{order.createdAt}</div>)}
        </div>
    )
}

export default OrderSummary;
