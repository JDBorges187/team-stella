import React, {useEffect} from 'react';
import CheckoutItem from './CheckoutItem';
import {useSelector, useDispatch} from 'react-redux';
import { getAllProducts } from "../../store/products";

//Will want to get list of products from redux store
const CheckoutList = () => {
    const cart = useSelector((state) => state.cart);
    const products = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const itemKeys = (cart !== null) ? Object.keys(cart) : [];

    const getTotalCost = () => {
        const costTotal = Object.keys(cart).reduce(
          (sum, itemID) => cart[itemID] * products[itemID].price + sum,
          0
        );
        return costTotal;
    };

    return (
        <>
            <ul className='checkout-list'>
                {itemKeys.map((item, idx) => {
                    let product = products[item];
                    console.log(product);
                    return (<li key={idx}>
                        <CheckoutItem
                            image={product.image}
                            name={product.name}
                            quantity={cart[item]}
                            price={product.price * cart[item]}/>
                    </li>)
                })}
            </ul>

            <div className='divider'/>

            <table className='price-display'>
                <tbody>
                    <tr>
                        <th>Total: </th>
                        <td>
                            <span>${getTotalCost().toFixed(2)}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CheckoutList;
