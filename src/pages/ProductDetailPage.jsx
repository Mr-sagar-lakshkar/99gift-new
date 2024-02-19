import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../store/TopFiveSlice';
import ProductImageComponent from '../components/ProductImageComponent';
import ProductContentComponent from '../components/ProductContentComponent';
import Header from '../components/Header';
import ProductDenominationComponent from '../components/ProductDenominationComponent';


const ProductDetailPage = () => {
    // const [product, setProduct] = useState({
    //     "id": 102,
    //     "api_id": 5,
    //     "routing_api_id": null,
    //     "sku": "EGCGBBBQN001",
    //     "url": null,
    //     "title": "BARBEQUE NATION E-Gift Card (Brand Voucher)",
    //     "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fibil/bFubPmKShfXuzxqEJsyZNvwIYxFUDhR84Wn4PUfw.png",
    //     "description": "Barbeque Nation was founded in 2006 with a simple vision – offering a complete dining experience to customers at affordable prices. One of the most successful casual dining chains in India, Barbeque Nation pioneered the concept of live grills embedded under dining tables – allowing customers to grill their own barbecue’s right at their tables. A novelty at the time, the restaurant allowed clients to customize their own starters with their preference of flavours – ushering the era of ‘Do It Yourself cuisine’ in India. The look and feel of all outlets is rustic and casual with wood and open-brick wall surface. The sizzle of the grills livens up the whole atmosphere and gives diners a comfortable and cosy experience.",
    //     "terms": "1.Prior table booking advised\r\n2.Voucher will be redeemed on the total bill value.\r\n3.Please present the original Voucher before placing orders.\r\n4.This Voucher cannot be clubbed with any other existing offer or discount.\r\n5.Taxes as applicable.\r\n6.No cash payment will be made by the company either in part or in full nor exchanged.\r\n7.Management reserves the right to identify the authenticity of the Voucher in case of any dispute if any.\r\n8.Management can change the company policy without any prior intimation.\r\n9.The company does not accept any responsibility if the customer loses the Voucher.\r\n10.Voucher to be settled in full amount. No refund of the balance.\r\n11.Valid at PAN India outlet of Barbeque Nation only except Kolhapur and international outlets.\r\n12.Validity of voucher 6 months from the date of purchase.\r\n13.No cancellation and No refund money.\r\n14.Clubbing cards are allowed. ( Max of 5 GV in one bill )",
    //     "redeem": "",
    //     "website": 0,
    //     "store": 1,
    //     "min_price": 500,
    //     "max_price": 10000,
    //     "discount_type": "percentage",
    //     "discount": 5,
    //     "points": 0,
    //     "c_discount": 0,
    //     "featured": 0,
    //     "display": 10000,
    //     "special": 1,
    //     "corp_basic": 0,
    //     "corp_discount": 1,
    //     "front": 0,
    //     "ios": 1,
    //     "basic": 1,
    //     "daily": "0",
    //     "monthly": "0",
    //     "referral": "1",
    //     "stock_buy_for": null,
    //     "offline_purchase": null,
    //     "content": null,
    //     "like": [
    //         {
    //             "id": 649,
    //             "title": "McDonalds E-Gift Card",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/yNqT42TwC6KlsoHZOCDRDWU1SGfd0rD9H7ulFaGT.jpg",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/yNqT42TwC6KlsoHZOCDRDWU1SGfd0rD9H7ulFaGT.jpg",
    //             "discount_type": "percentage",
    //             "discount": 11
    //         },
    //         {
    //             "id": 642,
    //             "title": "Ovenstory E-Gift Card - B2C",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/phePhtTdDBoxmRHZx5tYdnGhvr32tcQYDMZtkPKb.png",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/phePhtTdDBoxmRHZx5tYdnGhvr32tcQYDMZtkPKb.png",
    //             "discount_type": "percentage",
    //             "discount": 5
    //         },
    //         {
    //             "id": 640,
    //             "title": "Pizza Hut E-Gift Card",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/YJcgn0bqw6bPuD6uApIkNkkxZTTNqVnIqeUAJCZA.jpg",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/YJcgn0bqw6bPuD6uApIkNkkxZTTNqVnIqeUAJCZA.jpg",
    //             "discount_type": "percentage",
    //             "discount": 7
    //         },
    //         {
    //             "id": 632,
    //             "title": "Third Wave Coffee E-Gift Card",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/KzlWldPO6ZX4m8dp3Yi1J7z3dHNhxJL2Z8P0mHJm.png",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/KzlWldPO6ZX4m8dp3Yi1J7z3dHNhxJL2Z8P0mHJm.png",
    //             "discount_type": "percentage",
    //             "discount": 8
    //         },
    //         {
    //             "id": 627,
    //             "title": "Starbucks E-Gift Voucher",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/6XdX640udFnRrEnc2gEDuozXf2Y3VO4zG9rfXxe5.jpg",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/6XdX640udFnRrEnc2gEDuozXf2Y3VO4zG9rfXxe5.jpg",
    //             "discount_type": "percentage",
    //             "discount": 4
    //         },
    //         {
    //             "id": 623,
    //             "title": "McDonald’s McCafe Gift Card -Silver",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/6PknjmSU0m6ihjqi7zmAwKxA5TADF4LTjYGvmOu7.jpg",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/6PknjmSU0m6ihjqi7zmAwKxA5TADF4LTjYGvmOu7.jpg",
    //             "discount_type": "percentage",
    //             "discount": 3
    //         },
    //         {
    //             "id": 622,
    //             "title": "McDonald’s McCafe Gift Card -Gold",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/cE9pXze6WuB4JfMmwzVydvi9pfOXSNJhV4E71Yvs.jpg",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/cE9pXze6WuB4JfMmwzVydvi9pfOXSNJhV4E71Yvs.jpg",
    //             "discount_type": "percentage",
    //             "discount": 4
    //         },
    //         {
    //             "id": 619,
    //             "title": "Zambar E-Gift Card",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/PiDEHvOgDVOIZWlcUayPubZiG717uWaSBCbu7eDD.jpg",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/PiDEHvOgDVOIZWlcUayPubZiG717uWaSBCbu7eDD.jpg",
    //             "discount_type": "percentage",
    //             "discount": 7
    //         },
    //         {
    //             "id": 618,
    //             "title": "YouMee E-Gift Card",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/yoyvLLZUalGkouiQ17UOZ1QjI3DjZ9k7eIeANE6s.jpg",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/yoyvLLZUalGkouiQ17UOZ1QjI3DjZ9k7eIeANE6s.jpg",
    //             "discount_type": "percentage",
    //             "discount": 7
    //         },
    //         {
    //             "id": 617,
    //             "title": "Street Foods By PUNJAB Grill E-Gift Card",
    //             "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/JTAc9qymc2uTnywO96KU5ZX0SmOPubWjcWAcsFaZ.jpg",
    //             "brand_image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/JTAc9qymc2uTnywO96KU5ZX0SmOPubWjcWAcsFaZ.jpg",
    //             "discount_type": "percentage",
    //             "discount": 7
    //         }
    //     ],
    //     "point_value": 2,
    //     "point_text": "Reward Points",
    //     "point_visible": true,
    //     "terms_offer1": "",
    //     "terms_offer2": "",
    //     "Product_Sliders": [],
    //     "Product_Offers": [],
    //     "denomination": [],
    //     "brand": {
    //         "id": 202,
    //         "title": "Barbeque Nation",
    //         "image": "https://www.verdict.co.uk/wp-content/uploads/2018/11/shutterstock_712915198-e1542045457155.jpg"
    //     },
    //     "category": {
    //         "id": 7,
    //         "title": "Food",
    //         "image": "https://99paisa.s3.ap-south-1.amazonaws.com/fund--request/IvtKmeTJpqwl6im6YJzFmMzcrWo7V0ifH52n24fo.jpg"
    //     }
    // })
    const [product, setProduct] = useState();
    const { data, status } = useSelector((state) => state.productdetails);
    const productData = data;

    useEffect(() => {
        setProduct(productData)
    }, [product])
   
    if (status === STATUSES.LOADING) {
        return (
            <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden text-center">Loading...</span>
                </div>
            </div>
        )
    }

    const ProductDenominationComponentProps = {
        denomination: false,
        min_price: product.min_price,
        max_price: product.max_price,
        percentage: product.discount
    }

    return (
        <>
            <div className="container-fluid bg-light">
                <Header />
                <div className="contaier mt-5 py-3 pb-5">
                    <div className="row justify-content-center  align-items-start">
                        <div className="col-lg-5 col-md-12 col-12 mb-md-auto mb-4 justify-content-center text-center">
                            {product && (<ProductImageComponent image={product.image} title={product.title} key={product.id} />)}
                        </div>
                        <div className="col-lg-7 col-md-12 col-12 mb-md-auto mt-md-5 mt-lg-0 mb-4 justify-content-center">
                            {product && (<ProductContentComponent title={product.title} description={product.description} discount={product.discount} />)}
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-12 col-md-10 col-lg-6 ">
                            {ProductDenominationComponentProps && (<ProductDenominationComponent props={ProductDenominationComponentProps} />)}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetailPage;
