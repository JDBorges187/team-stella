import React from 'react';

const OrderSelect = ({orders, orderId, setOrderId}) => {

    return (
        <div>
            <form>
                <select>
                    <option>Select an order...</option>
                    {orders && Object.values(orders).map((order, idx) => {
                        return (
                            <option key={idx}>{order.createdAt}</option>
                        )
                    }) }
                </select>
            </form>
        </div>
    )
}

export default OrderSelect;
