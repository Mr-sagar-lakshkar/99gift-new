import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import Hero from "../components/Hero";
import LoadingComponent from "../components/LoadingComponent";
import { getAllProduct } from "../api";
import { fetchAllProducts, fetchCategoryProduct } from "../actions";

function CategoryPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); //--running loader
  let nanoKey = nanoid(); //-- generate random key
  let { id: productId } = useParams(); //--product id from url
  let { title: categoryTitle } = useParams(); //--product id from url
  const categoryProducts  = useSelector((state) => state.productCategorytReducer);
  const products = categoryProducts?.products;

  useEffect(() => {
    if (productId) {
      getProductCategory(productId);
    }
  }, [productId]);

  const getProductCategory = async (productId) => {
    const apiData = {
      search: null,
      filterBy: "title",
      selectedCategories: [productId],
      pagination: {
        sortBy: "id",
        descending: false,
        page: 1,
        rowsPerPage: 89,
        rowsNumber: 0,
      },
    };
    let data = await getAllProduct(apiData);

    // console.log(data?.data)

    if (data?.data) {
      dispatch(fetchCategoryProduct(data?.data));
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="container mt-5 bg-light">
        <div className="row ">
          <div className="col-12 d-flex justify-content-center ">
            {categoryTitle && (
              <h4 className="display-5 text-center my-5 text-uppercase fw-bold text-decoration-underline">
                {categoryTitle} Category
              </h4>
            )}
          </div>
          {products &&
            products.map((item, index) => (
              <div className="col-12 col-sm-4 col-md-4 col-lg-3" key={index}>
                <Card
                  key={nanoKey}
                  title={item.title}
                  discount={item.discount}
                  item={item}
                  image={item.image}
                  keyId={item.id}
                />
              </div>
            ))}

          {loading && <LoadingComponent />}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
