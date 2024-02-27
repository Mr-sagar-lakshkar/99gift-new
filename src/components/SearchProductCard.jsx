import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SearchProductCard({searchCard}) {
    if (searchCard?.length) {
        return (
            <>
                <ul className="list-group productList bg-light rounded ">
                    {searchCard && searchCard.map((item, index) => (
                        <React.Fragment key={index}>
                            <Link to={`/products/${encodeURIComponent(item?.title)}/${item?.id}`}>
                                <li className="list-group-item rounded mb-1 bg-light shadow-sm d-flex align-items-center">
                                    <img src={item.image} alt={item.title} className='img-fluid ' />
                                   <p className='text-start'> {item.title}</p>
                                </li>
                            </Link>
                        </React.Fragment>
                    ))}
                </ul>
            </>
        )
    }
}

export default SearchProductCard;