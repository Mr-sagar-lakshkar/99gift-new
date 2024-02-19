import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./SlideSlice";
import FeatureReducer from "./FesturedSlice";
import cartReducer from './CartSlice';
import TopFiveProductsReducer from './TopFiveSlice';
import ProductDetailReducer from "./ProductDetailSlice";

const store = configureStore({
    reducer:{
        slides:slideReducer,
        cart:cartReducer,
        featuredGift:FeatureReducer,
        topfivePropducts:TopFiveProductsReducer,
        productdetails:ProductDetailReducer,
    }
});

export default store;