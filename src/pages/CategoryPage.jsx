import React, { useState } from 'react'
import Card from '../components/Card'
import { STATUSES, fetchCategoryProducts } from '../store/CategoryProductSlice'
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { add } from '../store/CartSlice';

function CategoryPage() {

    const { data, status } = useSelector((state) => state.categoryProducts)
    const [categoryProductData, setCategoryProductData] = useState();
    const cardData = data.data;

    const dispatch = useDispatch();
    const id = 4;

    useState(() => {
        if (!categoryProductData) {
            dispatch(fetchCategoryProducts(id));
        }
        setCategoryProductData(cardData)
    }, [])

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
        <div className='container '>
            <div className="row">
                <div className="col-6 ">
                    {categoryProductData && categoryProductData.map((item, index) => (
                        // <Card key={nanoid()} title={item.title} discount={item.discount} handleFun={handleAdd} item={item} image={item.image} keyId={item.id} />
                        console.log(item)
                    ))}

                </div>
            </div>


        </div>
    )
}

export default CategoryPage