import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../store/TopFiveSlice';
import ProductImageComponent from '../components/ProductImageComponent';
import ProductContentComponent from '../components/ProductContentComponent';
import Header from '../components/Header';
import ProductDenominationComponent from '../components/ProductDenominationComponent';


const ProductDetailPage = () => {
    
    const [product, setProduct] = useState();
    const { data, status } = useSelector((state) => state.productdetails);
    const productData = data;

    useEffect(() => {
        setProduct(productData)
    }, [product])
   
    if (status === STATUSES.LOADING) {
        return (
            <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden text-center">Loading...</span>
                </div>
            </div>
        )
    }

    const ProductDenominationComponentProps = {
        denomination: false,
        min_price: product.min_price,
        max_price: product.max_price,
        percentage: product.discount
    }

    return (
        <>
            <div className="container-fluid bg-light">
                <Header />
                <div className="contaier mt-5 py-3 pb-5">
                    <div className="row justify-content-center  align-items-start">
                        <div className="col-lg-5 col-md-12 col-12 mb-md-auto mb-4 justify-content-center text-center">
                            {product && (<ProductImageComponent image={product.image} title={product.title} key={product.id} />)}
                        </div>
                        <div className="col-lg-7 col-md-12 col-12 mb-md-auto mt-md-5 mt-lg-0 mb-4 justify-content-center">
                            {product && (<ProductContentComponent title={product.title} description={product.description} discount={product.discount} />)}
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-md-10 col-lg-6 ">
                            {ProductDenominationComponentProps && (<ProductDenominationComponent props={ProductDenominationComponentProps} />)}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetailPage;