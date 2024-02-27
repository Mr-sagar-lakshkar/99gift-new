import { nanoid } from 'nanoid';
import React from 'react'
import { Link } from 'react-router-dom';

const CategoryCard = ({ imgPath, title ,item}) => {
    const nanoKey = nanoid();
 
    return (
        <>
            <Link to={`/category/${encodeURIComponent(title)}/${item.id}`}>
                <div className='category-card shadow-sm'>
                    <img src={imgPath} alt={title} className='img-fluid' key={nanoKey} />
                    <p className='category-title'>{title}</p>
                </div>
            </Link>
        </>
    )
}
export default CategoryCard;