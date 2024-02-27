import {
  FETCH_CATEGORY,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_SLIDES,
  FETCH_TOP_FIVE_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_NOTIFICATIONS,
  FETCH_SEARCH_PRODUCT,
  FETCH_PRODUCT_DETAIL
} from "./actionTypes";

const initialState = {
  products: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS: // Corrected action type
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SLIDES:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const topProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_FIVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const productCategorytReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const allProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_NOTIFICATIONS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export const ProductDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAIL:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};