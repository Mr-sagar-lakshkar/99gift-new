import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_CATEGORY } from '../actionTypes';
import { fetchCategory } from '../actions';
import { fetchAllCategory, fetchApi } from '../api';
import './components-styles/Category.css'
import CategoryCard from './CategoryCard';
import LoadingComponent from './LoadingComponent';


function Category() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const products = useSelector((state) => state.categoryReducer);
    const category = products?.products;
   
    useEffect(() => {
        getCategory()
    }, []);

    const getCategory = async () => {
        const data = await fetchAllCategory();
        if (data?.data) {
            dispatch(fetchCategory( data?.data));
            setLoading(false);
        }
    };

    return (
        <div className='container-fluid category-container px-3'>
            <div className="row justify-content-center text-center">
                <div className="col-12 bg-body-secondary bg-gradient" style={{ "--bs-bg-opacity": "0.8" }}>
                    <div id="categoryCardContainer" className="carousel slide">
                        <div className="carousel-inner">

                            {category && (
                                Array.from({ length: Math.ceil(category.length / 8) }).map((_, i) => (
                                    <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                                        <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
                                            {category.slice(i * 8, (i + 1) * 8).map((item, index) => (
                                                <CategoryCard key={index} imgPath={item.image} title={item.title} item={item} />
                                            ))}
                                        </div>
                                    </div>
                                )))}

                            {loading && <LoadingComponent />}

                        </div>
                        <button className="carousel-control-prev align-self-start" type="button" data-bs-target="#categoryCardContainer" data-bs-slide="prev" style={{ width: "100px" }}>
                            <span className="carousel-control-prev-icon bg-primary rounded-3" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next align-self-end" type="button" data-bs-target="#categoryCardContainer" data-bs-slide="next" style={{ width: "100px" }}>
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