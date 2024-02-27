import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SearchProductCard from './SearchProductCard';
import { getSearchResult } from '../api';
import { fetchSearchProducts } from '../actions';
import './components-styles/SearchBoxComponent.css'

function SearchBoxComponent() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [searchKey, setSearchKey] = useState('');

    const products = useSelector(state => state.SearchReducer);
    const searchResult = products?.products;
  
    useEffect(() => {
        if(searchKey){
            getSearchBoxResult(searchKey);
        }
    }, [searchKey]);

    const getSearchBoxResult = async (SearchKeyword) => {
        let searchKey = {"search":SearchKeyword,"filterBy":"title","selectedCategories":[],"pagination":{"sortBy":"id","descending":false,"page":1,"rowsPerPage":5,"rowsNumber":0}};
        
        let data = await getSearchResult(searchKey);
        if (data?.data) {
            dispatch(fetchSearchProducts(data?.data));
            setLoading(false)
        }
    };


    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center d-flex justify-content-evenly hero-banner rounded shadow-sm pt-5" style={{ height: '30vh' }}>
                    <div className="col-7">
                        <form className="d-flex  align-items-center mx-4" role="search">
                            <input
                                className="form-control me-2 py-1 py-md-2 py-lg-3 shadow-sm shadow-lg-lg bg-light pr-0 rounded"
                                type="search"
                                placeholder="Search Your Favorite Brands"
                                value={searchKey}
                                onChange={(e) => setSearchKey(e.target.value)}
                                aria-label="Search Your Favorite Brands"
                            />
                        </form>
                    </div>


                    <div className="col-6 overflow-auto searchItem rounded" >
                        {searchKey && <SearchProductCard searchCard= {searchResult} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBoxComponent