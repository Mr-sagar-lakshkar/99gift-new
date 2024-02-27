import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSlides, fetchApi } from '../api';
import { fetchSlides } from '../actions';
import { FETCH_SLIDES } from '../actionTypes';
import LoadingComponent from './LoadingComponent';

export default function Hero() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const sliderData = useSelector(state => state.slideReducer);
  const products = sliderData?.products;

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    let data = await fetchAllSlides();
    if (data?.data) {
      dispatch(fetchSlides(data?.data));
      setLoading(false)
    }
  };

  return (
    <div className='container-fluid mt-5'>
      <div id="carouselExample" className="carousel slide border border-0 rounded rounded-3 shadow shadow-lg">
        <div className="carousel-inner rounded rounded-3">
          {products && (products.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={item.image} className="d-block w-100" alt={item.title} />
            </div>
          )))}

          {loading && <LoadingComponent />}

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
