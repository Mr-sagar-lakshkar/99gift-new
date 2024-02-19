import React from 'react'

const ProductImageComponent = ({image,title}) => {
  return (
    <>
    <img src={image} className="img-fluid w-75 " alt={title}/>
    </>
  )
}

export default ProductImageComponent