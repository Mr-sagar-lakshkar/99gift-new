
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

const slideSlice = createSlice({
    name: 'slices',
    initialState,
    reducers: {
        setSlides(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }
    }
});

export function fetchSlides() {
    return async function fetchSlideThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const requestData = {
                mobile: "",
                password: ""
            };

            const headers = {
                'Content-Type': 'application/json',
            };
            const response = await axios.get("https://api2.99gift.in/api/v6/sliders", {
                headers: headers,
                params: requestData,
            });

            dispatch(setSlides(response.data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
export const { setStatus,setSlides } = slideSlice.actions;
export default slideSlice.reducer;