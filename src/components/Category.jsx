import React, { useEffect, useState } from 'react'
import './components-styles/Category.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory, STATUSES } from '../store/CategorySlice';
import { nanoid } from 'nanoid';
import CategoryCard from './CategoryCard';



function Category() {
    const dispatch = useDispatch();
    const [category, setCategory] = useState();
    const { data, status } = useSelector((state) => state.productCategory);
    const productCategoryData = data;
    const nanoKey = nanoid();

    useEffect(() => {
        dispatch(fetchCategory())
        if (productCategoryData) {
            setCategory(productCategoryData)
        }
    }, [productCategoryData]);




    if (status === STATUSES.LOADING) {
        return (
            <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: "10vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden text-center">Loading...</span>
                </div>
            </div>
        )
    }



    return (
        <div className='container-fluid category-container px-3'>
        <div className="row justify-content-center text-center">
            <div className="col-12 bg-body-secondary bg-gradient" style={{ "--bs-bg-opacity": "0.8" }}>
                <div id="categoryCardContainer" className="carousel slide">
                    <div className="carousel-inner">
                        {category &&
                            Array.from({ length: Math.ceil(category.length / 8) }).map((_, i) => (
                                <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                                    <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
                                        {category.slice(i * 8, (i + 1) * 8).map((item, index) => (
                                            <CategoryCard key={index} imgPath={item.image} title={item.title} item={item}/>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                    <button className="carousel-control-prev align-self-start" type="button" data-bs-target="#categoryCardContainer" data-bs-slide="prev" style={{width:"100px"}}>
                        <span className="carousel-control-prev-icon bg-primary rounded-3" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next align-self-end" type="button" data-bs-target="#categoryCardContainer" data-bs-slide="next" style={{width:"100px"}}>
                        <span className="carousel-control-next-icon bg-primary rounded-3" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Category