import { nanoid } from 'nanoid';
import React from 'react'
import { Link } from 'react-router-dom';
import { fetchCategoryProducts} from '../store/CategoryProductSlice';
import { useDispatch } from 'react-redux';

const CategoryCard = ({ imgPath, title ,item}) => {
    const dispatch = useDispatch();

    const fetchProductByCategoryId = (id) => {
        dispatch(fetchCategoryProducts(id));
    }

    return (
        <>
            <Link to={`/category/${encodeURIComponent(title)}`} onClick={() => fetchProductByCategoryId(item.id)}>
                <div className='category-card shadow-sm'>
                    <img src={imgPath} alt={title} className='img-fluid' key={nanoid()} />
                    <p className='category-title'>{title}</p>
                </div>
            </Link>
        </>
    )
}
export default CategoryCard;