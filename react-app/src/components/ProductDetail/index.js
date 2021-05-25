import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../store/products';
import './ProductDetail.css';

const ProductDetail = () => {

    // const { id } = useParams();

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getOneProduct(id));
    // }, [dispatch, id]);

    // const product = useSelector(state => state.products[id]);

    // if (!product) {
    //     return null;
    // }

    const product = {
        name: 'Replica Monster Energy Yamaha Team 2021 T-shirt',
        price: 56.00,
        description: 'Official replica of the polo shirt that will be worn by the Yamaha Monster Energy Team and its official riders: the Spanish Maverick Viñales and the Frenchman Fabio Quartararo in the 2021 season. It is made of technical fabric.',
        image: 'https://res.cloudinary.com/dpf7crjn5/image/upload/v1621893530/test%20data/teamMonsterShirt_d1mhot.jpg',
    }

    return (
        <div className="pdt-dtl__cntnr">
            <div className="pdt-dtl__display">
                <div className="pdt-dtl__img-cntnr">
                    <img className="pdt-dtl__img" src={product.image} alt="Product " />
                </div>
                <div className="pdt-dtl__main-info">
                    <div className="pdt-dtl__name">{product.name}</div>
                    <div className="pdt-dtl__label">Price</div>
                    <div className="pdt-dtl__price">{`$${product.price.toFixed(2)}`}</div>
                    <div className="pdt-dtl__stock">In stock now!</div>
                    <div className="pdt-dtl__policies">
                        <p>Free shipping</p>
                        <p>Free returns</p>
                        <p>Secure payments</p>
                    </div>
                    <button className="pdt-dtl__add-to-cart">
                        Add to cart
                    </button>
                    <button className="pdt-dtl__buy-it-now">
                        Buy it now
                    </button>
                    <div className="pdt-dtl__shipping-time">
                        Ships in 1-3 business days
                    </div>
                </div>
            </div>
            <div className="pdt-dtl__xtra-info">
                <p className="pdt-dtl__desc">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
