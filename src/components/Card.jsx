import React from 'react'
import './components-styles/Card.css'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { fetchProductDetail} from '../store/ProductDetailSlice';
import {add,remove} from '../store/CartSlice';

const Card = ({ title, discount, handleFun, item, image, keyId }) => {

   
    const dispatch = useDispatch();
    
    const fetchProduct = (id)=>{
        console.log(id)
        dispatch(fetchProductDetail(id))
    }

    const handleAdd = (product) => {
        dispatch(add(product));
    }


    return (
        <div key={nanoid()} className="voucher-card mx-md-3 mx-2 mb-5 overflow-hidden position-relative d-flex justify-content-center flex-column" style={{ minWidth: "19rem", height: "20rem" }} >
            <Link to={`/products/${encodeURIComponent(title)}`} onClick={() => fetchProduct(item.id)}>
                <img src={image} className="img-fluid w-100 pt-0 rounded shadow-sm border broder-1" alt={title} style={{ height: "190px" }} />

                <div className='d-block px-1 mt-3 mb-3 card-title '>
                    <p className='card-title d-block text-dark' style={{ textDecoration: "none" }}>{title}</p>
                </div>
            </Link>

            <div className='card-bedge pt-0 '>
                <span className="badge rounded rounded-0 text-bg-warning float-end">{discount}% Discount</span>
            </div>

            <div className="mt-1 py-2 d-flex justify-content-between ">
                <button className='btn bg-info-subtle d-inline-block' onClick={() => handleFun(item)}>Add to Cart <i className="bi bi-cart-plus-fill"></i></button>
                <button className='btn btn-warning d-inline-block'><i className="bi bi-star"></i></button>
            </div>


        </div>
    )
}

export default Card