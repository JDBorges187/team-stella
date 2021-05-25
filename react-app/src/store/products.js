const LOAD = 'products/LOAD';

const load = list => ({
  type: LOAD,
  list,
});

export const getOneProduct = (id) => async (dispatch) => {
  const response = await fetch(`/api/products/${id}`);
  if (response.ok){
    const data = await response.json();
    return data;
  }
};

export const getAllProducts = () => async (dispatch) => {
  const response = await fetch("/api/products/");
  if (response.ok) {
    const data = await response.json();
    const list = data.products;

    dispatch(load(list));
  }
};

const initialState = {
  list: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const allProducts = {};
      action.list.forEach(product => {
        allProducts[product.id] = product;
      });
      return {
        ...allProducts,
        ...state,
        list: action.list,
      };
    }

    default:
      return state;
  }
}

export default productsReducer;
