import axios from 'axios';

export const getToken = () => {
    let token = localStorage.getItem("userInfo")
    token = JSON.parse(token)
    if (token) {
        return token?.token
    }
    return '';
}

export const userLoginInfo = async (userData) => {
    if (userData?.email && userData?.mobile && userData?.token) {
        localStorage.setItem('userInfo', JSON.stringify({email:userData.email, mobile:userData.mobile,token:userData.token }));
        return {USER_LOGIN_INFO : true}
    }
    return {USER_LOGIN_INFO : false}
}

export const userLoginStatus = () => {
    const userData = JSON.parse(localStorage.getItem("userInfo"))
    if (userData?.email && userData?.mobile && userData?.token) {
        return {USER_LOGIN_INFO : true}
    }
    return {USER_LOGIN_INFO : false}
}


export const userLogout = () => {
    const userData = JSON.parse(localStorage.getItem("userInfo"))
    if (userData?.email && userData?.mobile && userData?.token) {
        localStorage.clear();
        return {USER_LOGIN_INFO : false}
    }
    return {USER_LOGIN_INFO : true}
}


export const apiFunction = async (url, method, postData, token,extraConfig) => {
    url = process.env.REACT_APP_BACKEND_API_PATH + url
    let config = {
        method: method,
        url: url,
        data: postData ? postData : {},
    };

    if (token) {
        let token = getToken();

        config = {
            ...config,
            headers: { "token": `${token}` },
        }
    }

    if (extraConfig == "blob") {
        config = {
            ...config,
            responseType: 'blob',
        }
    }

    else if (extraConfig == "formData") {
        config = {
            ...config,
            headers: {
                ...config.headers,
                "content-type": "multipart/form-data",
            },
        };
    }

    let data;

    await axios({ ...config })
        .then((res) => {
            data = res.data
        })
        .catch((err) => {
            // console.log(err.response.data.message);
            console.log(err);
            data = {
                ...err.response.data,
                status: false,
            };
        });
    // console.log(data);
    return data;
};


