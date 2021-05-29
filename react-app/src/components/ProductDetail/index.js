import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductGroup } from '../../store/products';
import { getProductReviews, newReview } from '../../store/reviews'
import { addCartItem } from '../../store/cart'
import showHideDesc from '../ShowHide';
import ReviewCard from './ReviewCard'
import StarSpan from './StarSpan'
import './ProductDetail.css';

const ProductDetail = () => {
    const [addReview, setAddReview] = useState(false);
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(3);

    const dispatch = useDispatch();

    const { id } = useParams();
    //**********************************
    const cartObj = useSelector(state => state.cart);
    const cartItemIds = Object.keys(cartObj);
    const storedProducts = useSelector(state => Object.keys(state.products));
    const productsNeeded = cartItemIds.filter((itemId) => !storedProducts.includes(itemId));
    if(productsNeeded.length > 0){
      let group = `${productsNeeded[0]},${id}`;

      for(let i = 1; i < productsNeeded.length; i++){
        group += `,${productsNeeded[i]}`;
      }

      dispatch(getProductGroup(group));
    }

    //**********************************
    const product = useSelector(state => state.products[id]);

    useEffect( () => {
        dispatch(getProductReviews(id));
    }, [dispatch, id]);

    const reviews = useSelector(state => state.reviews.detail);

    window.scrollTo(0,0);

    if (!product) {
        return null;
    }

    const openAddReview = (e) => {
        e.preventDefault();
        setAddReview(true);
    }

    const submitComment = (e) => {
        e.preventDefault();
        //Send to db
        dispatch(newReview(id, review, rating))
        console.log("Review: ", review);
        console.log("Rating: ", rating)
        setReview('');
        setAddReview(false);
    }

    let reviewSection = (
        <>
            {reviews && reviews.map((review, i) => {
                const username = review.user.firstname
                return (
                    <ReviewCard key={i} title='Title' username={username} desc={review.review} rating={review.rating} />
                )
            })}
        </>
    )

    let addReviewSection = (<button onClick={openAddReview} className='pdt-dtl_add-review-button'>Add Review</button>);

    if (!addReview) {
        addReviewSection = <button onClick={openAddReview} className='pdt-dtl_add-review-button'>Add Review</button>;
    }
    else {
        addReviewSection = (
            <form className='pdt-dtl_add-review-form' onSubmit={submitComment}>
                {/* <input
                        type='text'
                        className='pdt-dtl_add-review-form'
                        placeholder='Add title here'
                        /> */}
                <textarea
                    className='pdt-dtl_add-review-textarea'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    placeholder='Add review here' />
                <StarSpan mutable={true} rating={rating} setRating={setRating} />
                <div className='review-form_btn-row'>
                    <button className='review-form_submit-btn' type='submit'>Submit Review</button>
                    <button className='review-form_cancel-btn'
                        onClick={() => {
                            setAddReview(false);
                            setRating(5);
                        }}>Cancel</button>
                </div>
            </form>
        )
    }

    const onPurchase = () => {
        dispatch(addCartItem(product));
    };

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
                    <button onClick={onPurchase} className="pdt-dtl__add-to-cart">
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
                <button onClick={() => showHideDesc(".pdt-dtl__reviews", ".pdt-dtl__reviews-chevron", ".reviews-btn")} className="pdt-dtl__xtra-info-btn reviews-btn">
                    <span className="pdt-dtl__xtra-info-title">Reviews</span>
                    <i className="fas fa-chevron-down pdt-dtl__reviews-chevron"></i>
                </button>
                <div className="pdt-dtl__reviews">
                    <div className="pdt-dtl__review-container">
                        {addReviewSection}
                        {reviewSection}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;
