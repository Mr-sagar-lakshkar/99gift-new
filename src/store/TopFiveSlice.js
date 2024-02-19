
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

const TopFive = createSlice({
    name: 'top-five-propducts',
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

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {

            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };
            const res = await fetch("https://api2.99gift.in/api/v6/topfive", requestOptions);
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
export const { setProducts, setStatus } = TopFive.actions;
export default TopFive.reducer;