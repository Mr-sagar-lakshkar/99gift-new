
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const initialState = {
    data: [],
    status: STATUSES.IDLE
};

const CategoryProduct = createSlice({
    name: 'category-product',
    initialState,
    reducers: {
        setCategoryProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }

});

export function fetchCategoryProducts(productId) {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        const myHeaders = new Headers();

        try {
            const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDgxNTk0MTQsIm5iZiI6MTcwODE1OTQxNCwiaXNzIjoiaHR0cHM6XC9cL2FwaS45OWdpZnQuaW4iLCJhdWQiOiJodHRwczpcL1wvYXBpLjk5Z2lmdC5pbiIsImV4cCI6MTcxMDc1MTQxNCwibWV0YSI6eyJpZCI6MjU0MTgsInJvbGVfaWQiOjEsIm5hbWUiOiJTYWdhciBMYWtzaGthciIsIm1vYmlsZSI6Ijk5ODMzNjg3NDAiLCJlbWFpbCI6InNhZ2FybGFrc2hhcjIzQGdtYWlsLmNvbSIsInZlcmlmaWVkIjoxLCJsYXN0X2xvZ2luIjpudWxsfX0.qmTv_BGLbayVkRXFCztplssMgbr7Dj0EBHuAlNtny5s';

            let data = JSON.stringify({
                "search": null,
                "filterBy": "title",
                "selectedCategories": [
                    productId
                ],
                "pagination": {
                    "sortBy": "id",
                    "descending": false,
                    "page": 1,
                    "rowsPerPage": 89,
                    "rowsNumber": 0
                }
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://api2.99gift.in/api/v6/list',
                headers: {
                    'Token': `${TOKEN}`,
                    'Content-Type': 'application/json'
                },
                data: data
            };


            const response = await axios.request(config);

            dispatch(setCategoryProducts(response.data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
export const { setCategoryProducts, setStatus } = CategoryProduct.actions;
export default CategoryProduct.reducer;