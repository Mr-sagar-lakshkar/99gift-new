import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSlides, STATUSES } from '../store/SlideSlice';

const Hero = () => {
  const dispatch = useDispatch();
  const { data: slideData, status } = useSelector(state => state.slides)
  useEffect(() => {
    dispatch(fetchSlides())
  }, []);


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
    <div className='container-fluid mt-5'>
      <div id="carouselExample" className="carousel slide border border-0 rounded rounded-3 shadow shadow-lg">
        <div className="carousel-inner rounded rounded-3">
          {slideData.data && slideData.data.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <img src={item.image} className="d-block w-100" alt={item.title} />
            </div>
          ))}

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

export default Hero 
