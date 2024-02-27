import { configureStore } from '@reduxjs/toolkit'
import {
    reducer,
    slideReducer,
    categoryReducer,
    topProductReducer,
    productCategorytReducer,
    allProductReducer,
    notificationReducer,
    SearchReducer,
    ProductDetailReducer
} from './reducer';

const store = configureStore({
    reducer: {
        reducer,
        slideReducer,
        categoryReducer,
        topProductReducer,
        productCategorytReducer,
        allProductReducer,
        notificationReducer,
        SearchReducer,
        ProductDetailReducer
    }
})
export default store;