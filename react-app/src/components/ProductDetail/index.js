import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../store/products';
import './ProductDetail.css';

const ProductDetail = () => {

    const { id } = useParams();
    console.log("********************");
    console.log(id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneProduct(id));
    }, [dispatch, id]);

    const product = useSelector(state => state.products[id]);

    if (!product) {
        return null;
    }

    // const product = {
    //     name: 'Replica Monster Energy Yamaha Team 2021 T-shirt',
    //     price: 56.00,
    //     description: 'Official replica of the polo shirt that will be worn by the Yamaha Monster Energy Team and its official riders: the Spanish Maverick Viñales and the Frenchman Fabio Quartararo in the 2021 season. It is made of technical fabric.',
    //     image: 'https://res.cloudinary.com/dpf7crjn5/image/upload/v1621893530/test%20data/teamMonsterShirt_d1mhot.jpg',
    // }


    const showHideDesc = (infoClass, arrowClass, buttonClass) =>{
        let chev = document.querySelector(arrowClass);
        let btn = document.querySelector(buttonClass);

        if (document.querySelector(infoClass).style.display !== "block"){
            document.querySelector(infoClass).style.display = "block";
            chev.style.transform = "rotate(180deg)";
            btn.style.borderBottom = "none";
        }
        else{
            document.querySelector(infoClass).style.display = "none";
            chev.style.transform = "rotate(-360deg)";
            btn.style.borderBottom = "1px solid darkgray"
        }

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
                <button onClick={() => showHideDesc(".pdt-dtl__desc", ".pdt-dtl__desc-chevron", ".desc-btn")} className="pdt-dtl__xtra-info-btn desc-btn">
                    <span className="pdt-dtl__xtra-info-title">Description</span>
                    <i className="fas fa-chevron-down pdt-dtl__desc-chevron"></i>
                </button>
                <div className="pdt-dtl__desc">{product.description}</div>
                <button onClick={() => showHideDesc(".pdt-dtl__reviews", ".pdt-dtl__reviews-chevron", ".reviews-btn" )} className="pdt-dtl__xtra-info-btn reviews-btn">
                    <span className="pdt-dtl__xtra-info-title">Reviews</span>
                    <i className="fas fa-chevron-down pdt-dtl__reviews-chevron"></i>
                </button>
                <div className="pdt-dtl__reviews">
                    Some reviews...
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
