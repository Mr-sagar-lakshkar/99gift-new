import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { getProductDetail } from "../api";
import { fetchProductDetail } from "../actions";
import ProductImageComponent from "../components/ProductImageComponent";
import ProductContentComponent from "../components/ProductContentComponent";
import Header from "../components/Header";
import ProductDenominationComponent from "../components/ProductDenominationComponent";
import Card from "../components/Card";
import OrderPayComponent from "../components/OrderPayComponent";

function ProductDetailPage() {
  const dispatch = useDispatch();
  let { id: productId } = useParams();

  const[totalAmt,setTotalAmt] = useState(0);
  const[orderAmount,setorderAmount] = useState(0);
  const[orderSaveMoney,setOrderSaveMoney] = useState(0)
  const[orderPaidMoney,setOrderPaidMoney] = useState(0)

  const ProductDetail = useSelector((state) => state.ProductDetailReducer);
  const product = ProductDetail?.products;
  const likeData = product?.like;

  let ProductDenominationComponentProps = {
    min_price: "",
    max_price: "",
    percentage: "",
  };

  useEffect(() => {
    if (productId) {
      getProductList(productId);
    }
  }, [productId]);

  const getProductList = async (id = 0) => {
    let data = await getProductDetail(id);

  

    if (data?.data) {
      dispatch(fetchProductDetail(data?.data));
    }
  };

  // check Denomination is available or not
  const validateDenomination = (denomination) => {
    if (denomination) {
      if (!denomination.length) {
        // show custom deomination range and functionality.
        ProductDenominationComponentProps = {
          min_price: product.min_price,
          max_price: product.max_price,
          percentage: product.discount,
        };
        return true;
      } else {
        ProductDenominationComponentProps = {
          min_price: product.min_price,
          max_price: product.max_price,
          percentage: product.discount,
        };
        return true;
      }
    }
    return false;
  };

  // function ShowDenominationTable () {
  //   ProductDenominationComponentProps = {
  //     min_price: product.min_price,
  //     max_price: product.max_price,
  //     percentage: product.discount,
  //   };
  // }

  return (
    <>
      <div className="container-fluid bg-light">
        <Header />
        <div className="contaier mt-5 py-3 pb-5">
          <div className="row justify-content-center  align-items-start">
            <div className="col-lg-5 col-md-12 col-12 mb-md-auto mb-4 justify-content-center text-center">
              <ProductImageComponent
                image={product?.image}
                title={product?.title}
                key={product?.id}
              />
            </div>
            <div className="col-lg-7 col-md-12 col-12 mb-md-auto mt-md-5 mt-lg-0 mb-4 justify-content-center">
              <ProductContentComponent
                title={product?.title}
                description={product?.description}
                discount={product?.discount}
              />
            </div>
          </div>

          <div
            className="row justify-content-center mt-5 bg-white py-3"
            style={{ minHeight: "40vh" }}
          >
            <div className="col-12 col-md-10 col-lg-6 ">
              {validateDenomination(product?.denomination) && (
                <ProductDenominationComponent
                  denominationDatNotAvailable={
                    ProductDenominationComponentProps
                  }
                  denominations={
                    product?.denomination ? product?.denomination : []
                  }
                  discount={product?.discount ? product?.discount : 0}
                  setorderAmount = {setorderAmount}
                  setOrderPaidMoney={setOrderPaidMoney}
                  setOrderSaveMoney={setOrderSaveMoney}
                />
              )}
            </div>

            <div className="col-12 col-md-10 col-lg-6 ">
              <OrderPayComponent 
                discount={product?.discount ? product?.discount : 0} 
                totalAmount={orderAmount} 
                orderPaidMoney={orderPaidMoney}
                orderSaveMoney={orderSaveMoney}
                
                />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-md-4 col-lg-3">
              <h4 className="display-5 text-center my-5 text-uppercase fw-bold">
                You might be interested in
              </h4>
            </div>
            {likeData &&
              likeData.map((item, index) => (
                <div className="col-12 col-sm-4 col-md-4 col-lg-3" key={index}>
                  <Card
                    key={nanoid()}
                    title={item.title}
                    discount={item.discount}
                    item={item}
                    image={item.image}
                    keyId={item.id}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
