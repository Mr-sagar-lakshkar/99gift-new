
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const initialState = {
    data: [],
    status: STATUSES.IDLE
};

const Category = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }

});

export function fetchCategory() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            let data = '{"newweb":true}';

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://api2.99gift.in/api/v6/categories',
                headers: {},
                data: data
            };

            const apiResponse = await axios.request(config);
            dispatch(setCategory(apiResponse.data.data));
            dispatch(setStatus(STATUSES.IDLE));

        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}

export const { setCategory, setStatus } = Category.actions;
export default Category.reducer;