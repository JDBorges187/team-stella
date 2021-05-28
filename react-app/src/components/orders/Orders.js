import React, {useState} from 'react'
import OrderSelect from './OrderSelect'
import OrderSummary from './OrderSummary'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [orderId, setOrderId] = useState(-1);

    const getOrders = async () => {
        let response = await fetch();
    }

    return (
        <>
            <div>Hi</div>
            <OrderSelect orders={orders} setOrderId={setOrderId}/>
            <OrderSummary />
        </>
    )
}

export default Orders;
