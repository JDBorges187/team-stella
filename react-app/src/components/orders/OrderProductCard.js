import React from 'react'

const OrderProductCard = ({item, products}) => {
    let product = products[item.productId]
    return (
        <div className='order-product-card'>
            {item.orderid}
            <div className="order-product-card-image" style={{backgroundImage: `url(${product.image})`}} />
            <div className="order-product-card-title">{product.name}</div>
             <div className="order-product-card-price">{`$${product.price.toFixed(2)}`}</div>
        </div>
    )
}

export default OrderProductCard;
