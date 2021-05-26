const ADD_ITEM = "cart/ADD_ITEM";

export const addCartItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

const CartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const itemID = action.item.id.toString();
      const count = state[itemID] || 0;
      return {
        ...state,
        [itemID]: count + 1,
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
