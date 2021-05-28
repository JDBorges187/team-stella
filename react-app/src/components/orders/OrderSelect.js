import React from 'react';

const OrderSelect = ({orders, orderId, setOrderId}) => {

    return (
        <div className='order-select-sidebar'>
            {orders && orders.map((order, idx) => {
                return (
                    <div className='order-list-item' key={idx}
                    onClick={() => setOrderId(idx)}
                    >
                        {order.createdAt}
                    </div>
                )
            }) }
        </div>
    )
}

export default OrderSelect;
