import React from "react";
import {filterByPrice} from "../../store/products";
import { useDispatch } from 'react-redux';

const Filter = () => {

    // const product1 = {
    //     id: 1,
    //     name: 'Replica Monster Energy Yamaha Team 2021 T-shirt',
    //     price: 56.00,
    //     description: 'Official replica of the polo shirt that will be worn by the Yamaha Monster Energy Team and its official riders: the Spanish Maverick Viñales and the Frenchman Fabio Quartararo in the 2021 season. It is made of technical fabric.',
    //     image: 'https://res.cloudinary.com/dpf7crjn5/image/upload/v1621893530/test%20data/teamMonsterShirt_d1mhot.jpg',
    // }
    const dispatch = useDispatch();

    return (
        <>
            <div className="filter">FILTER
                <button onClick={() => dispatch(filterByPrice(0, 100))} className="filter__test">Test</button>
            </div>
        </>
    );
};

export default Filter;
