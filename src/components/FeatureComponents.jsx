import React, { useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../store/FesturedSlice';
import { add } from '../store/CartSlice';
import './components-styles/Featured.css'
import Card from './Card';



const FeatureComponents = () => {

    const dispatch = useDispatch();
    const { data : {data : productsData}, status } = useSelector((state) => state.featuredGift);
   
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    

    if (status === STATUSES.LOADING) {
        return (
            <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden text-center">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className='container-fluid mb-5 bg-light shadow-sm rounded-3'>
            <div className="row">
                <div className="col-12">
                    <h4 className='display-5 text-center my-5 text-uppercase fw-bold'>Featured Gift Vouchers</h4>
                </div>
            </div>
            <div className="row d-flex flex-row productRow">
                {productsData && productsData.map((item, index) => (
                    <div className="col-12 col-sm-4 col-md-4 col-lg-3" key={index}>
                        <Card key={nanoid()} title={item.title} discount={item.discount} item={item} image={item.image} keyId={item.id} />
                    </div>
                ))}
            </div>
        </div>

    );

}

export default FeatureComponents;