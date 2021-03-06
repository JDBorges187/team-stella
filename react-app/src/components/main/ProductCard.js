import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart";
import {NavLink} from "react-router-dom";

const ProductCard = ({ product }) => {
  const history = useHistory();
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const onPurchase = (e) => {
    e.stopPropagation();
    dispatch(addCartItem(product));
  };

  const goToProductPage = (e) => {
    e.stopPropagation();
    history.push(`/products/${product.id}`);
  }

  return (
    <div className="card-container"
      onClick={(e) => goToProductPage(e)}
      onMouseOver={() => setShowAdd(true)}
      onMouseLeave={() => setShowAdd(false)}
    >
      <div onClick={(e) => onPurchase(e)}
        className={'fas fa-plus-circle fa-2x card-container_add-cart' + (showAdd ? '' : ' hide-add')}
        title='Add to cart'
      />
      <div className="card-image" style={{backgroundImage: `url(${product.image})`}} />
      <div className="card-title">{product.name}</div>
      <div className="card-price">{`$${product.price.toFixed(2)}`}</div>
    </div>
  );
};

export default ProductCard;
