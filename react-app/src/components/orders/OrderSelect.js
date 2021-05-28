import React from 'react';
import orderDateFormat from '../../utilities/timeFormatter'
const OrderSelect = ({orders, setOrderId}) => {

    return (
        <div className='order-select-sidebar'>
            <div className='order-select-sidebar-header'>
                Previous Orders:
            </div>
            <div className='order-select-list'>
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
        </div>
    )
}

export default OrderSelect;
