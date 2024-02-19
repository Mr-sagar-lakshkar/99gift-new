import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';



const QuantityComponent = ({ quantity, setQuantity }) => {

  const [count, setCount] = useState(quantity);

  const handleQuantityAdd = (item) => {
    if (item >= 0 && item < 5) {
      setCount((count) => count + 1);
      setQuantity((count) => count + 1);
    }
  };
  
  const handleQuantityRemove = (item) => {
    if (item > 0 && item <= 5) {
      setCount((count) => count - 1);
      setQuantity((count) => count - 1);
    }
  };
  

  return (
    <>
      <button className='border-0' onClick={() => handleQuantityAdd(count)}>
        <i className="bi bi-plus-square-dotted shadow-sm"></i>
      </button>
      <span className='fw-bold'>{count}</span>
      <button className='border-0' onClick={() => handleQuantityRemove(count)}>
        <i className="bi bi-dash-square-dotted shadow-sm"></i>
      </button>
    </>
  );

};


QuantityComponent.propTypes = {
  quantity: PropTypes.number.isRequired
};




export default QuantityComponent;
