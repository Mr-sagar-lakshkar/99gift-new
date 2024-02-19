import { createSlice } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const initialState = {
    data: [],
    status: STATUSES.IDLE
};


const ProductDetail = createSlice({
    name: 'product-detail',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }

});


export function fetchProductDetail(productId) {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const myHeaders = new Headers();
            myHeaders.append("Token", `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDgxNTk0MTQsIm5iZiI6MTcwODE1OTQxNCwiaXNzIjoiaHR0cHM6XC9cL2FwaS45OWdpZnQuaW4iLCJhdWQiOiJodHRwczpcL1wvYXBpLjk5Z2lmdC5pbiIsImV4cCI6MTcxMDc1MTQxNCwibWV0YSI6eyJpZCI6MjU0MTgsInJvbGVfaWQiOjEsIm5hbWUiOiJTYWdhciBMYWtzaGthciIsIm1vYmlsZSI6Ijk5ODMzNjg3NDAiLCJlbWFpbCI6InNhZ2FybGFrc2hhcjIzQGdtYWlsLmNvbSIsInZlcmlmaWVkIjoxLCJsYXN0X2xvZ2luIjpudWxsfX0.qmTv_BGLbayVkRXFCztplssMgbr7Dj0EBHuAlNtny5s`);


            const requestOptions = {
              method: "POST",
              headers: myHeaders,
              redirect: "follow"
            };
            const res = await fetch(`https://api2.99gift.in/api/v6/gift/details/${productId}`, requestOptions);
            const data = await res.json();
            dispatch(setProducts(data.data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}

export const { setProducts, setStatus } = ProductDetail.actions;
export default ProductDetail.reducer;