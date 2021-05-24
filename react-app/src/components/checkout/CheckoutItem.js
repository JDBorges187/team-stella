import React from 'react';

const CheckoutItem = ({name, price}) => {
    return (
        <div className='checkout-list_item'>
            <div className='checkout-item_image'></div>
            <div className='checkout-item_name'>{name}</div>
            <div className='checkout-item_price'>{price}</div>
        </div>
    )
}

export default CheckoutItem;
