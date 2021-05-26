const ADD_ITEM = "cart/ADD_ITEM";
const REMOVE_ITEM = "cart/REMOVE_ITEM";

export const addCartItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const removeCartItem = (item) => {
  return {
    type: REMOVE_ITEM,
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

    case REMOVE_ITEM: {
      const itemID = action.item.id.toString();
      const count = state[itemID];
      if (count === 1) {
        delete state[itemID];
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          [itemID]: count - 1,
        };
      }
    }

    default:
      return state;
  }
};

export default CartReducer;
