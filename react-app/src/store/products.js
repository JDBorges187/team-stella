
const LOAD = 'products/LOAD';

const FILTER = 'products/FILTER';

const REMOVEFILTER = 'products/REMOVEFILTER';

const SORT = 'products/SORT';

const load = list => ({
  type: LOAD,
  list,
});

const filter = (attribute, parameters) => ({
    type: FILTER,
    attribute,
    parameters
});

const removeFilter = (attribute, parameters) => ({
  type: REMOVEFILTER,
  attribute,
  parameters
});

const sort = (orderBy) => ({
  type: SORT,
  orderBy,
});

export const sortProducts = (orderBy) => (dispatch) => {
  dispatch(sort(orderBy));
};

export const applyFilter = (attribute, parameters) => (dispatch) => {
    dispatch(filter(attribute, parameters));
};

export const deleteFilter = (attribute, parameters) => (dispatch) => {
  dispatch(removeFilter(attribute, parameters));
};

export const getAllProducts = () => async (dispatch) => {
  const response = await fetch("/api/products/");
  if (response.ok) {
    const data = await response.json();
    const list = data.products;
    dispatch(load(list));
  }
};

export const getProductGroup = (ids) => async (dispatch) => {
  const response = await fetch(`/api/products/group/${ids}`);
  if (response.ok){
    const data = await response.json();
    const list = data.products;
    dispatch(load(list));
  }
};

const initialState = {
  list: [],
  filters: {
    Prices: {},
    Categories: {},
  },
  sort: "0",
  filteredProducts: [],
};

const productsReducer = (state = initialState, action) => {

  const filterProducts = (newFilterList) => {

    const priceFilters = Object.keys(newFilterList["Prices"]);
    let categoryFilters = Object.keys(newFilterList["Categories"]);

    let filteredProducts = [];
    if(priceFilters.length > 0){
      priceFilters.forEach(filt => {
        const filtBoundaries = filt.split(",");
        state.list.forEach(product => {
          if(categoryFilters.length){
            if(product.price >= Number(filtBoundaries[0]) &&
                product.price <= Number(filtBoundaries[1]) &&
                categoryFilters.includes(product.categoryId.toString())){

              filteredProducts.push(product);
            }
          } else {
            if( product.price >= Number(filtBoundaries[0]) &&
                product.price <= Number(filtBoundaries[1]) ){

              filteredProducts.push(product);
            }
          }
        });
      });
    } else {
      if(categoryFilters.length){
        state.list.forEach(product => {
          if(categoryFilters.includes(product.categoryId.toString())){
            filteredProducts.push(product);
          }
        });
      } else {
        filteredProducts = [...state.list];
      }
    }

    return filteredProducts;
  };

  const sortCurrent = (products, orderBy) => {
    let filteredProducts = [...products];
    switch (orderBy) {
      case "1": {
        filteredProducts.sort((a,b) => a.price - b.price);
        return filteredProducts;
      }
      case "2": {
        filteredProducts.sort((a,b) => b.price - a.price);
        return filteredProducts;
      }
      case "3": {
        filteredProducts.sort((a,b) => {
          if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
          if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
          return 0;
        });
        return filteredProducts;
      }
      default: {
        return filteredProducts;
      }
    }
  }


  switch (action.type) {

    case LOAD: {
      const allProducts = {};
      action.list.forEach(product => {
        allProducts[product.id] = product;
      });
      return {
        ...allProducts,
        ...state,
        list: [...action.list],
        filteredProducts: [...action.list],
      };
    }

    case FILTER: {
      const newFilterList = {
        Prices: {...state.filters.Prices},
        Categories: {...state.filters.Categories},
      };
      newFilterList[action.attribute][action.parameters] = action.parameters;

      const filteredProducts = filterProducts(newFilterList);
      const sortedProdducts = sortCurrent(filteredProducts, state.sort);

      return {
        ...state,
        filters: { ...newFilterList},
        filteredProducts: sortedProdducts,
      };
    }

    case REMOVEFILTER: {
      const newFilterList = {
        Prices: {...state.filters.Prices},
        Categories: {...state.filters.Categories},
      };
      delete newFilterList[action.attribute][action.parameters];

      const filteredProducts = filterProducts(newFilterList);
      const sortedProdducts = sortCurrent(filteredProducts, state.sort);

      return {
        ...state,
        filters: { ...newFilterList},
        filteredProducts: sortedProdducts,
      };
    }

    case SORT: {
      let filteredProducts = [...state.filteredProducts];

      const sortedProducts = sortCurrent(filteredProducts, action.orderBy);
      return {
        ...state,
        sort: action.orderBy,
        filteredProducts: sortedProducts,
      }
    }

    default:
      return state;
  }
}

export default productsReducer;
