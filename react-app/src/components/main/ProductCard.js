import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const onPurchase = (e) => {
    e.stopPropagation();
    console.log("Reach")
    dispatch(addCartItem(product));
  };

  return (
    <div className="card-container" onClick={(e) => onPurchase(e)}>
      <div className="card-image">
        Image
        <img></img> {/* src={`${product.image}`} */}
      </div>
      <div className="card-title">{product.name}</div>
      <div className="card-price">{`$${product.price.toFixed(2)}`}</div>
    </div>
  );
};

export default ProductCard;
