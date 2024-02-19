import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const imgAddress = "https://99gift.in/img/square.2a77eab3.png";
    const cartItem = useSelector((state)=> state.cart)
  
    return (
        <div className='container-fluid px-0'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={imgAddress} alt="99 Gift Logo" width={38} height={38} className='rounded-5' /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-start">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/"><i className="bi bi-house mx-2"></i>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/"><i className="bi bi-gift mx-2"></i>Gift Cards</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/"><i className="bi bi-building mx-2"></i>Corporates Cards</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-primary" to="/cart">Cart Items : {cartItem.length}</Link>
              </li>
            </ul>

        <Link to={'./login'}> <button type="button" className="btn btn-outline-primary border border-0">Login</button> </Link>
        <Link to={'./login'}> <button type="button" className="btn btn-primary">Sign Up</button> </Link>

          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-center" style={{ height: '30vh', backgroundColor: '#183d83' }}>
        <form className="d-flex w-50 align-items-center mx-4" role="search">
          <input className="form-control me-2 py-1 py-md-2 shadow" type="search" placeholder="Search Your Favorite Brands" />
          <a type="submit" className='bg-white rounded-3 p-1 py-md-2 px-3 shadow'><i className="bi bi-search"></i></a>
        </form>
      </div>
    </div>
    )
}

export default Header