import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_SLIDES,
  FETCH_CATEGORY,
  FETCH_TOP_FIVE_PRODUCTS,
  FETCH_PRODUCT_BY_ID,
  FETCH_ALL_PRODUCTS,
  FETCH_ALL_NOTIFICATIONS,
  FETCH_SEARCH_PRODUCT,
  FETCH_PRODUCT_DETAIL,
  FETCH_PROFILE_DETAIL
} from "./actionTypes";


export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

export const fetchSlides = (products) => ({
  type: FETCH_SLIDES,
  payload: products
});

export const fetchCategory = (products) => ({
  type: FETCH_CATEGORY,
  payload: products
});

export const fetchTopProducts = (products) => ({
  type: FETCH_TOP_FIVE_PRODUCTS,
  payload: products
});

export const fetchCategoryProduct = (products) => ({
  type: FETCH_PRODUCT_BY_ID,
  payload: products
});

export const fetchAllProducts = (products) => ({
  type: FETCH_ALL_PRODUCTS,
  payload: products
});

export const fetchAllNotifications = (products) => ({
  type: FETCH_ALL_NOTIFICATIONS,
  payload: products
});

export const fetchSearchProducts = (products) => ({
  type: FETCH_SEARCH_PRODUCT,
  payload: products
});

export const fetchProductDetail = (products) => ({
  type: FETCH_PRODUCT_DETAIL,
  payload: products
});

