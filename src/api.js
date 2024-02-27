import { apiFunction } from "./Functions";

// apiFunction(url, method, postData, token,extraConfig) ---> reduried parmeters order

export const fetchApi = async (url = '', method = 'get', apiData = {}, token_require = false, extraConfig = null) => {
    return await apiFunction(url, method, apiData, token_require, extraConfig)
}

export const fetchAllSlides = async () => {
    return await apiFunction(`sliders`, 'get', {}, false, null)
}

export const fetchAllCategory = async () => {
    return await apiFunction(`categories`, 'get', {}, false, null)
}

export const getAllProduct = async (data) => {
    return await apiFunction(`list`, 'post', data, false, null)
}

export const getAllNotification = async (data) => {
    return await apiFunction(`user/notifications`, 'post', data, true, null)
}

export const getSearchResult = async (data) => {
    return await apiFunction(`list`, 'post', data, false, null)
}
export const getProductDetail = async (id) => {
    return await apiFunction(`gift/details/${id}`, 'post', {}, false, null)
}

export const setUserLogin = async (data) => {
    return await apiFunction(`user/login`, 'post', data, false, null)
}

export const fetchUserProfile= async () => {
    return await apiFunction(`user/validate-token`, 'post', {}, true, null)
}

export const fetchStatusChangePassword= async (data) => {
    return await apiFunction(`user/change-password`, 'post', data, true, null)
}

