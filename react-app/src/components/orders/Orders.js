import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import OrderSelect from './OrderSelect'
import OrderSummary from './OrderSummary'
import {getAllProducts} from '../../store/products'
import './Orders.css'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [orderId, setOrderId] = useState(-1);
    const products = useSelector((state) => state.products.list);

    const dispatch = useDispatch();

    const getOrders = async () => {
        let response = await fetch('/api/orders');
        const order_list = await response.json();
        setOrders(Object.values(order_list));
        // console.log(order_list[0])
    }

    useEffect( () => {
        getOrders();
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <>
            <div className='order-page-container'>
                <OrderSelect orders={orders} setOrderId={setOrderId} orderId={orderId} products={products}/>
                <OrderSummary order={orderId >= 0 ? orders[orderId] : null} products={products}/>
            </div>
        </>
    )
}

export default Orders;
