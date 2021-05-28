import React from 'react'
import {useHistory} from 'react-router-dom';

const OrderProductCard = ({item, products}) => {
    let product = products[item.productId]
    const history = useHistory();
    const goToProduct = () => {
        history.push(`/products/${item.productId}`)
    }

    return (
        <div className='order-product-card' onClick={goToProduct}>
            {item.orderid}
            <div className="order-product-card-image" style={{backgroundImage: `url(${product.image})`}} />
            <div className="order-product-card-title">{product.name}</div>
            <div className="order-product-card-price">{`$${product.price.toFixed(2)}`}</div>
            <div className="order-product-card-quantity"></div>
        </div>
    )
}

export default OrderProductCard;
