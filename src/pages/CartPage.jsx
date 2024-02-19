import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { remove } from '../store/CartSlice';

const CartPage = () => {

    const products = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const  handleRemove = (productId) =>{
        dispatch(remove(productId));
    }


    return (
        <div className='container-fluid mb-5 bg-body-secondary'>
            <div className="row">
                <div className="col-12">
                    <h3 className='display-4 text-center my-5 text-uppercase'>Gift Cart</h3>
                </div>
                <div className="col-12 d-flex flex-row overflow-x-scroll">
                    {products&& products.map((item, index) => (
                        <div className="voucher-card shadow rounded-3 pb-3 rounded-3 mx-3  mb-3  bg-body-tertiary overflow-hidden position-relative" style={{ minWidth: "17rem", height: "20rem" }} key={index}>
                            <img src={item.image} className="img-fluid w-100 pt-0" alt="Feature Vouchers" style={{ height: "170px" }} />
                            <hr className="text-primary my-0 py-0" />

                            <div className='d-block px-1 mt-3 mb-3 card-title'>
                                <p className='h5 d-inline'>{item.title}</p>
                            </div>

                            <div className='card-bedge pt-0'>
                                <span className="badge rounded rounded-0 text-bg-warning float-end">{item.discount}% Discount</span>
                            </div>

                            <div className="d-grid gap-2 mt-3 px-3 py-2">
                                <button className='btn btn-danger d-block' onClick={() => handleRemove(item.id)}>Remove Product </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CartPage