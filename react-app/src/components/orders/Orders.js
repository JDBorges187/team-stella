import React, {useState, useEffect} from 'react'
import OrderSelect from './OrderSelect'
import OrderSummary from './OrderSummary'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [orderId, setOrderId] = useState(-1);

    const getOrders = async () => {
        let response = await fetch('/api/orders');
        const order_list = await response.json();
        setOrders(order_list);
        console.log(Object.values(order_list)[0].createdAt);
    }

    useEffect( () => {
        getOrders();
    }, []);

    return (
        <>
            <OrderSelect orders={orders} setOrderId={setOrderId} orderId={orderId}/>
            <OrderSummary />
        </>
    )
}

export default Orders;
