import React from 'react'
import './components-styles/ProductContentComponent.css'

const ProductContentComponent = ({ title, description, discount }) => {
    return (
        <>
            <div className="row rounded-3 bg-light">
                <div className="col-12">
                    <div className="display-6 mb-3 product-title">{title}</div>
                    <div className="d-block mb-3 align-item-center d-flex">
                        <span className="badge product-bedge">Discount : <span className='h5 fw-bold '> {discount}% </span></span>
                    </div>
                    <div className="product-para mb-3"> <p> {description} </p> </div>
                </div>
            </div>
        </>
    )
}

export default ProductContentComponent