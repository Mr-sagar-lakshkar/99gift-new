import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import Card from '../components/Card';
import { fetchAllProducts, fetchCategory } from '../actions';
import { fetchAllCategory, fetchApi, getAllProduct } from '../api';

function AllProductPage() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const categoryData = useSelector((state) => state.categoryReducer); //--category data 

    const category = categoryData?.products;
    
    const products = useSelector(state => state.allProductReducer); //--product data 
    const allproducts = products?.products;
    
    // console.log(products)

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [itemPerPage, setItemPerPage] = useState(9);
    const [page, setPage] = useState(1);
    const paginate = { page: page };

    useEffect(() => {
        fetchAllProduct();
        getCategory();
    }, [page, itemPerPage, selectedCategories]);

    const getCategory = async () => {
        const data = await fetchAllCategory();
       
        if (data?.data) {
            dispatch(fetchCategory( data?.data));
            setLoading(false);
        }
    };

    const fetchAllProduct = async () => {
        const apiData = {
            "search": null,
            "filterBy": "title",
            "selectedCategories": [...selectedCategories],
            "pagination": { "sortBy": "id", "descending": false, "page": page, "rowsPerPage": itemPerPage, "rowsNumber": 0 }
        }
        let data = await getAllProduct(apiData);

        if (data?.data) {
            dispatch(fetchAllProducts(data?.data));
            setLoading(false)
        }
    };

    const handleCheckboxChange = (categoryId) => {

        // console.log(categoryId)
        // Check if the category is already selected
        if (selectedCategories.includes(categoryId)) {
            // If selected, remove it from the array
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            // If not selected, add it to the array
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    const handleProductPerPage = itemPage => setItemPerPage(itemPage);
    const handlePageClick = page => setPage(page);

    return (
        <div className="container-fluid">
            <Header />
            <div className="container">
                <div className="row mt-5 justify-content-center align-items-start">
                    <div className="col-12 col-md-12 col-lg-12 d-flex justify-content-end mt-3">
                        <div className="dropdown">
                            <a className="btn btn-primary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {itemPerPage} Products
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" onClick={() => handleProductPerPage(9)}>9</a></li>
                                <li><a className="dropdown-item" onClick={() => handleProductPerPage(15)}>15</a></li>
                                <li><a className="dropdown-item" onClick={() => handleProductPerPage(24)}>24</a></li>
                                <li><a className="dropdown-item" onClick={() => handleProductPerPage(51)}>51</a></li>
                                <li><a className="dropdown-item" onClick={() => handleProductPerPage(99)}>99</a></li>
                            </ul>
                        </div>
                    </div>

                    <aside className="col-12 col-md-12 col-lg-2">
                        <div className="row bg-light h-100 pt-4">
                            <div className="col-12">
                                <h4 className=''>Brand's Gift Card (Categories)</h4>
                            </div>
                            <div className="col-12 d-flex text-right">
                                <ul className="list-group d-md-inline-block d-lg-block mt-2">

                                    {category && category?.map((item, index) => (
                                        <li className="list-group-item d-md-inline-block d-lg-block" key={index}>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id={`flexCheckDefault${index}`}
                                                    onChange={() => handleCheckboxChange(item.id)}
                                                    checked={selectedCategories.includes(item.id)} />
                                                <label className="form-check-label" htmlFor={`flexCheckDefault${index}`}>
                                                    {item.title}
                                                </label>
                                            </div>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </aside>
                    <div className="col-12 col-md-12 col-lg-10">
                        <div className="row d-flex productRow bg-light rounded pt-3">
                            {allproducts && allproducts?.map((item, index) => (
                                <div className="col-12 col-sm-4 col-md-4 col-lg-3" key={index}>
                                    <Card key={nanoid()} title={item.title} discount={item.discount} item={item} image={item.image} keyId={item.id} />
                                </div>))}
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-10 d-flex justify-content-end mt-3">
                        <nav aria-label="Page navigation example ">
                            <ul className="pagination">
                                <li className="page-item">

                                    <a className={`page-link pe-auto ${page > 6 ? 'disabled' : ''}`} aria-label="Previous" onClick={() => handlePageClick(page - 1)}>
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>

                                {paginate && Array.from({ length: 5 }, (_, index) => {
                                    let pageNumber = 1;
                                    if (pageNumber > 4) {
                                        pageNumber = paginate.page - 3 + index;
                                    }
                                    pageNumber = paginate.page + index;
                                    return (
                                        <li className="page-item" key={index}>
                                            <a className={`page-link pe-auto ${page === pageNumber ? 'bg-primary text-white' : ''}`} onClick={() => handlePageClick(pageNumber)}>
                                                {pageNumber}
                                            </a>
                                        </li>
                                    );
                                })}



                                <li className="page-item pe-auto">
                                    <a className={`page-link pe-auto`} aria-label="Next" onClick={() => handlePageClick(page + 1)}>
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AllProductPage;
