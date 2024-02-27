import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./components-styles/Header.css";
import NotificationComponent from "./NotificationComponent";
import SearchBoxComponent from "./SearchBoxComponent";
import { userLoginStatus, userLogout } from "../Functions";

function Header() {
  const { USER_LOGIN_INFO } = userLoginStatus(); //--check user login status - (login = true , not login = false)

  // ---------------------------------------------------------------
  const imgAddress = "https://99gift.in/img/square.2a77eab3.png";
  const profileLogo = "https://99gift.in/img/square.2a77eab3.png";
  const [isLogin, setIsLogin] = useState();
  // const cartItem = useSelector((state) => state.cart);

  const navigate = useNavigate();
  function handleLogout() {
    setIsLogin();
    userLogout(false);
  }

  useEffect(() => {
    if (USER_LOGIN_INFO) {
      setIsLogin(USER_LOGIN_INFO);
    }
  }, [isLogin]);

  
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img
              src={imgAddress}
              alt="99 Gift Logo"
              width={38}
              height={38}
              className="rounded-5 align-self-start"
            />
          </Link>

          <button
            className="navbar-toggler float-end"
            type="button "
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-start">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="bi bi-house mx-2"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/giftCards">
                  <i className="bi bi-gift mx-2"></i>Gift Cards
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/giftCards">
                  <i className="bi bi-building mx-2"></i>Corporates Cards
                </Link>
              </li>
              {/* {isLogin && <li className="nav-item">
                <Link className="nav-link fw-bold text-primary" to="/cart">Cart Items : {cartItem.length}</Link>
              </li>} */}
            </ul>

            <div className=" d-flex align-items-center pb-2">
            {isLogin && (
              <>
                <NotificationComponent />
                <Link to={"/profile"}>
                  <div className="profilLogo ">
                    <img
                      src={profileLogo}
                      className="img-thumbnail"
                      alt="user profile"
                    />
                    <h6 className=" mb-3">My Account</h6>
                  </div>
                </Link>
              </>
            )}
         

            {isLogin ? (
              <button
                type="button"
                className="btn btn-primary border border-0"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <Link to={"/login"}>
                <button
                  type="button"
                  className="btn btn-danger border border-0"
                >
                  Login/Signup
                </button>
              </Link>
            )}
          </div>
          </div>

          
        </div>
      </nav>
      <SearchBoxComponent />
    </div>
  );
}

export default Header;
