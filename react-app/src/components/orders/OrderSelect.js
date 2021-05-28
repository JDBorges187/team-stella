import React from 'react';
import orderDateFormat from '../../utilities/timeFormatter'
const OrderSelect = ({orders, setOrderId}) => {

    return (
        <div className='order-select-sidebar'>
            {orders && orders.map((order, idx) => {
                return (
                    <div className='order-list-item' key={idx}
                    onClick={() => setOrderId(idx)}
                    >
                        {orderDateFormat(new Date(order.createdAt))}
                    </div>
                )
            }) }
        </div>
    )
}

export default OrderSelect;
