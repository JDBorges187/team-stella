import React from 'react';
import orderDateFormat from '../../utilities/timeFormatter'
const OrderSelect = ({orders, setOrderId, products}) => {

    const totalOrderPrice = (orderIdx) => {
        console.log("Orders", orders[0].order_items)
        return orders[orderIdx].order_items.reduce((sum, item) => {
            if(products[item.productId]){
                return sum + (products[item.productId].price * item.quantity)
            }
            return sum;
        }, 0)
    }
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
                            <p>Date: {orderDateFormat(new Date(order.createdAt))}</p>
                            <p>Total: {products && `$${totalOrderPrice(idx)}`}</p>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}

export default OrderSelect;
