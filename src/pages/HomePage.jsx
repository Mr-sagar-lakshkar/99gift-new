import React from 'react';
import Header from '../components/Header';
import Category from '../components/Category';
import Hero from '../components/Hero';
import FeatureComponents from '../components/FeatureComponents';
import FoodComponent from '../components/FoodComponent';
import ApparelComponent from '../components/ApparelComponent';
import GroceryComponent from '../components/GroceryComponent';


const HomePage = () => {
  return (
    <div className="container-fluid">
        <Header />
        <Hero/>
        <Category/>
        <FeatureComponents/>
        <FoodComponent/>
        <ApparelComponent/>
        <GroceryComponent/>
    </div>
  )
}

export default HomePage