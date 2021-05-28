import React, {useState, useEffect} from 'react'
import OrderSelect from './OrderSelect'
import OrderSummary from './OrderSummary'
import './Orders.css'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [orderId, setOrderId] = useState(-1);

    const getOrders = async () => {
        let response = await fetch('/api/orders');
        const order_list = await response.json();
        setOrders(Object.values(order_list));
        // console.log(order_list[0])
    }

    useEffect( () => {
        getOrders();
    }, []);

    return (
        <>
            <div className='order-page-container'>
                <OrderSelect orders={orders} setOrderId={setOrderId} orderId={orderId}/>
                <OrderSummary order={orderId >= 0 ? orders[orderId] : null}/>
            </div>
        </>
    )
}

export default Orders;
