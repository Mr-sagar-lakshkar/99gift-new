import React, { useEffect, useState } from "react";
import Header from "./Header";
import PrintError from "./PrintError";
import { useNavigate } from "react-router-dom";
import "./components-styles/Login.css";
import { userLoginInfo, userLoginStatus } from "../Functions";
import { setUserLogin } from "../api";

function Login() {
  // debugger
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);
  const [errorData, setErrorData] = useState();
  const navigate = useNavigate();

  const STATUSES = Object.freeze({
    IDLE: "Success",
    ERROR: "Error",
    WARNING: "Warning",
  });

  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phone && password) {
      const validateResult = validate(phone, password);
      if (validateResult) {
        const userInfo = await userLogin({ mobile: phone, password });

        const {USER_LOGIN_INFO} = await userLoginInfo({
          email: userInfo?.email,
          mobile: userInfo?.mobile,
          token: userInfo?.token,
        });

        if(USER_LOGIN_INFO){
            setErrorStatus(true);
            setErrorData({
              message: "Successfully Login!",
              status: STATUSES.IDLE,
            });
            setPhone('');
            setPassword('');
        }
        return true;
      }
    } else {
      setErrorStatus(true);
      setErrorData({
        message: "Please Input  Required Credentials.",
        status: STATUSES.ERROR,
      });
    }
  };

  const validate = (phone, password) => {
    phone = phone.trim();
    password = password.trim();

    const validPhoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (phone.length < 10) {
      const message = "Phone number should be at least 10 characters.";
      setErrorStatus(true);
      setErrorData({ message, status: STATUSES.ERROR });
      return false;
    }

    if (phone.match(validPhoneRegex) && password.length >= 6) {
      return true;
    } else {
      if (!phone.match(validPhoneRegex)) {
        const message = "Invalid Phone Number.";
        setErrorStatus(true);
        setErrorData({ message, status: STATUSES.ERROR });
      }

      if (password.length < 6) {
        const message = "Password should be at least 6 characters.";
        setErrorData({ message, status: STATUSES.ERROR });
      }

      return false;
    }
  };

  const userLogin = async (data) => {
    const userInfo = await setUserLogin(data);

    const message = userInfo?.message;
    const status = userInfo?.status;

    if (status) {
      return {
        email: userInfo?.data?.email,
        mobile: userInfo?.data?.mobile,
        token: userInfo?.data?.token,
      };
    } else {
        setErrorStatus(true);
        setErrorData({
          message: message,
          status: STATUSES.ERROR,
        });
      return false;
    }
  };

  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="container bg-light loginContainer">
          <div className="row justify-content-center rounded-3 px-lg-5 w-100">
            <div className="col-12 col-sm-10 col-md-8 col-12">
              <h3 className="display-4 text-center">Login</h3>
            </div>

            {errorStatus && (
              <PrintError
                message={errorData.message}
                alertStatus={errorData.status}
              />
            )}

            <div className="col-12 col-sm-10 col-md-8 col-12">
              <form className="mt-4 shadow-sm px-4 w-100 py-4 d-flex justify-content-center flex-column bg-light shadow-sm">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="email"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="true"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="true"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
