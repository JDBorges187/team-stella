import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const onPurchase = (e) => {
    e.stopPropagation();
    dispatch(addCartItem(product));
  };

  return (
    <div className="card-container" onClick={(e) => onPurchase(e)}>
      <div className="card-image" style={{backgroundImage: `url(${product.image})`}}>
        {/* <img src={`${product.image}`}></img> src={`${product.image}`} */}
      </div>
      <div className="card-title">{product.name}</div>
      <div className="card-price">{`$${product.price.toFixed(2)}`}</div>
    </div>
  );
};

export default ProductCard;
