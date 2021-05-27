const ADDONE = 'products/ADDONE';

const LOAD = 'products/LOAD';

const FILTER = 'products/FILTER';

const addOne = list => ({
  type: ADDONE,
  list,
});

const load = list => ({
  type: LOAD,
  list,
});

const filter = (low, high) => ({
    type: FILTER,
    low,
    high,
  });

export const filterByPrice = (low, high) => (dispatch) => {
    dispatch(filter(low, high));
};

export const getOneProduct = (id) => async (dispatch) => {
  const response = await fetch(`/api/products/${id}`);
  if (response.ok){
    const data = await response.json();
    const list = [data.product];
    dispatch(addOne(list));
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

    case ADDONE: {
      // const currentList = [];
      // let flag = false;
      // state.list.forEach(product => {
      //   if( product.id === action.list[0].id)
      //     flag = true;
      //   currentList.push(product);
      // })
      // if(!flag)
      //   currentList.push(action.list[0]);
      return {
        [action.list[0].id]: action.list[0],
        list: [...action.list],
      }
    }
    case LOAD: {
      const allProducts = {};
      action.list.forEach(product => {
        allProducts[product.id] = product;
      });
      return {
        ...allProducts,
        ...state,
        list: [...action.list],
      };
    }
    case FILTER: {
        const filteredProducts = {};
        const productList = [];
        state.list.forEach(product => {
            if(product.price >= action.low && product.price <= action.high){
                filteredProducts[product.id] = product;
                productList.push(product);
            }
        });
        return {
            ...filteredProducts,
            list: productList,
        };
    }

    default:
      return state;
  }
}

export default productsReducer;
