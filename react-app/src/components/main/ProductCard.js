import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../store/cart";

const ProductCard = ({ product }) => {
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const onPurchase = (e) => {
    e.stopPropagation();
    dispatch(addCartItem(product));
  };

  return (
    <div className="card-container"
      onMouseOver={() => setShowAdd(true)}
      onMouseLeave={() => setShowAdd(false)}
    >
      <i onClick={(e) => onPurchase(e)}
        className={'fas fa-plus-circle fa-2x card-container_add-cart' + (showAdd ? '' : ' hide-add')}
      />
      <div className="card-image" style={{backgroundImage: `url(${product.image})`}} />
      <div className="card-title">{product.name}</div>
      <div className="card-price">{`$${product.price.toFixed(2)}`}</div>
    </div>
  );
};

export default ProductCard;
