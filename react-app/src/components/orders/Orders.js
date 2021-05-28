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
        console.log(order_list);
    }

    useEffect( () => {
        getOrders();
    }, []);

    return (
        <>
            <div>Hi</div>
            <OrderSelect orders={orders} setOrderId={setOrderId}/>
            <OrderSummary />
        </>
    )
}

export default Orders;
