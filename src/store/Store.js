import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./SlideSlice";
import FeatureReducer from "./FesturedSlice";
import cartReducer from './CartSlice';
import TopFiveProductsReducer from './TopFiveSlice';
import ProductDetailReducer from "./ProductDetailSlice";
import CategoryReducer from "./CategorySlice";
import CategoryProductReducer from "./CategoryProductSlice";

const store = configureStore({
    reducer:{
        slides:slideReducer,
        cart:cartReducer,
        featuredGift:FeatureReducer,
        topfivePropducts:TopFiveProductsReducer,
        productdetails:ProductDetailReducer,
        productCategory: CategoryReducer,
        categoryProducts :CategoryProductReducer,
    }
});

export default store;