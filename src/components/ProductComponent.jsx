import React, { useEffect, useState } from 'react'
import Card from './Card';
import { nanoid } from 'nanoid';
import LoadingComponent from './LoadingComponent';

function ProductComponent({ name, ComponentData }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (name, ComponentData) {
            setLoading(false)
        }
    }, [name, ComponentData])

    return (
        <>
            <div className='container-fluid mb-5 bg-light shadow-sm rounded-3'>
                <div className="row">
                    <div className="col-12">
                        <h4 className='display-5 text-center my-5 text-uppercase fw-bold'>{name}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 productRow" >
                        {ComponentData && ComponentData?.products?.map((item, index) => (
                            <Card key={nanoid()} title={item.title} discount={item.discount} item={item} image={item.image} keyId={item.id} />
                        ))}
                        {loading && <LoadingComponent />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductComponent