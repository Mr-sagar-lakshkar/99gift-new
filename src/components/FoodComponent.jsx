import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../store/TopFiveSlice';
import { add } from '../store/CartSlice';
import './components-styles/Featured.css'
import Card from './Card';
import { nanoid } from 'nanoid';

const FoodComponent = () => {

    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.topfivePropducts);
    const foodData  = data.data?.[0].products;

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    }


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
        <div className='container-fluid mb-5'>
            <div className="row">
                <div className="col-12">
                    <h3 className='display-4 text-center my-5 text-uppercase'>Food Gift Vouchers</h3>
                </div>
                <div className="col-12 d-flex flex-row overflow-x-scroll">
                    {foodData && foodData.map((item, index) => (
                        <Card key={nanoid()} title={item.title} discount={item.discount} handleFun={handleAdd} item={item} image={item.image} keyId={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default FoodComponent;