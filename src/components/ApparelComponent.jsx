import React, { useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../store/TopFiveSlice';
import { add } from '../store/CartSlice';
import './components-styles/Featured.css'
import Card from './Card';

const ApparelComponent = () => {

    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.topfivePropducts);
    const apparelData  = data.data?.[1].products;

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
        <div className='container-fluid mb-5 bg-body-white'>
            <div className="row">
                <div className="col-12">
                    <h3 className='display-4 text-center my-5 text-uppercase'>Apparel Gift Vouchers</h3>
                </div>
                <div className="col-12 d-flex flex-row overflow-x-scroll">
                    {apparelData && apparelData.map((item, index) => (
                        <Card key={nanoid()} title={item.title} discount={item.discount} handleFun={handleAdd} item={item} image={item.image} keyId={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );

}

export default ApparelComponent;