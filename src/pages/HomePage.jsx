import React, { Component, useEffect, useState } from 'react';
import Header from '../components/Header';
import Category from '../components/Category';
import Hero from '../components/Hero';

import { FETCH_TOP_FIVE_PRODUCTS } from '../actionTypes';
import { fetchTopProducts } from '../actions';
import { fetchApi } from '../api';
import { useDispatch } from 'react-redux';
import ProductComponent from '../components/ProductComponent';
import NotificationComponent from '../components/NotificationComponent';



function HomePage() {
  const dispatch = useDispatch();
  const [topProduct, setTopProduct] = useState();

  useEffect(() => {
    getTopProducts();
  }, []);

  const getTopProducts = async () => {
    const url = `topfive`;
    const method = 'post';
    let data = await fetchApi(url, method);

    if (data?.data) {
      setTopProduct(data?.data);
      dispatch(fetchTopProducts({
        type: FETCH_TOP_FIVE_PRODUCTS,
        payload: data?.data
      }));
    }
  };

  return (
    <div className="container-fluid ">
      <Header />
      <Hero />
      <Category />
      {topProduct && topProduct.map((item, index) => (
        <ProductComponent key={index} name={item.title} ComponentData={item} />
      ))}
      {/* <FeatureComponents/> */}

    </div>
  )
}

export default HomePage