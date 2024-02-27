import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { getProductDetail } from "../api";
import { fetchProductDetail } from "../actions";
import ProductImageComponent from "../components/ProductImageComponent";
import ProductContentComponent from "../components/ProductContentComponent";
import Header from "../components/Header";
import ProductDenominationComponent from "../components/CustomDenoComponent";
import Card from "../components/Card";
import ProductDenominatinDefault from "../components/ProductDenominatinDefault";

function ProductDetailPage() {
  // debugger
  const dispatch = useDispatch();
  let { id: productId } = useParams();
  const ProductDetail = useSelector((state) => state.ProductDetailReducer);
  const product = ProductDetail?.products;
  const likeData = product?.like;
  const productDenomination = product?.denomination;

  // console.log("productDenomination =>", productDenomination);
  // console.log('complete api Data => ',ProductDetail)
  let customDenomination = {
    min_price: 0,
    max_price: 0,
    percentage: 0,
  };
  let defaultDenomination = [];

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
  const checkDenomination = (denomination) => {
    if (!denomination?.length) {
      console.log(!denomination?.length);
      customDenomination = {
        min_price: product?.min_price,
        max_price: product?.max_price,
        percentage: product?.percentage,
      };
      return true;
    }
    return false;
  };

  const defaultDenominationCheck = (denomination) => {
    if (denomination?.length) {
      defaultDenomination = [ {
        amount:denomination?.amount,
        min_price: product?.min_price,
        max_price: product?.max_price,
        percentage: product?.percentage,
      }];
      return true;
    }
    return false;
  };

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
              {/* {checkDenomination(product?.denomination) && (
                <ProductDenominationComponent
                  denominationDatNotAvailable={customDenomination}
                />
              )} */}
            </div>

            <div className="col-12 col-md-10 col-lg-6 ">
              {defaultDenominationCheck(product?.denomination) && (
                <ProductDenominatinDefault
                  denominationData={defaultDenomination}
                />
              )}
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
