import React from 'react';
// import { useSelector } from "react-redux";
import OrderProductCard from './OrderProductCard'

const OrderSummary = ({order, products}) => {
    // const products = useSelector((state) => state.products.list);
    console.log(order)
    return (
        <div className='order-summary-container'>
            {order && (
                order.order_items.map((item, idx) => {
                    return <OrderProductCard key={idx} item={item} products={products}/>;
                })
            )}
        </div>
    )
}

export default OrderSummary;
