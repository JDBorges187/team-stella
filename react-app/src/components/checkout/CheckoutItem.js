import React from 'react';

const CheckoutItem = ({image, name, quantity, price}) => {
    return (
        <div className='checkout-list_item'>
            <div className='checkout-item_image' style={{backgroundImage: `url(${image})`}}>
                <span className='checkout-item_quantity'>{quantity}</span>
            </div>

            <div className='checkout-item_name'>{name}</div>
            <div className='checkout-item_price'>${price.toFixed(2)}</div>
        </div>
    )
}

export default CheckoutItem;
