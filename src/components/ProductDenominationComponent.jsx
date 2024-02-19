import React, { useEffect, useState } from 'react';
import DenominationTableComponent from './DenominationTableComponent';
import'./components-styles/ProductDenominationComponent.css'

const ProductDenominationComponent = (props) => {
    props = props.props



    // Hooks 
    const [amount, setAmount] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [denominationTable, setDenominationTable] = useState(true)
    const [denominationData, setDenominationData] = useState([]);
    const [handleQuantity, setHandleQuantity] = useState(1);
    const [totalMoney, setTotalMoney] = useState('');


    // Internal Variables
    const placeholderData = `Input Between min:${props.min_price} and max:${props.max_price}`;
    const discount = props.percentage;
    const saveMoney = (amount / 100) * discount;
    const moneyToPaid = parseFloat((amount - saveMoney)).toFixed(2);




    useEffect(() => {

    }, [])



    // handleDenomination function : when user input on range input field
    const handleDenomination = (e) => {
        e.preventDefault();
        // check the user input value 
        const validateInput = handleDenominationInputValue(amount);
        if (validateInput) {
            // true: Proceed further operations
            setDenominationTable(true)

            setDenominationData([
                ...denominationData,
                {
                    amount: amount,
                    discount: discount,
                    quantity: quantity,
                    saving: saveMoney,
                    total: moneyToPaid,
                }]
            );
            // console.log('denominationTable => ', denominationTable)
            // console.log('denominationData => ', denominationData)

            setAmount('')
        } else {
            // False: give Error to user 
            alert('Please enter valid rupees')
        }

    }


    const handleDenominationInputValue = (value) => {
        if (value >= props.min_price && value <= props.max_price) {
            return true
        }
        return false;
    }

    return (
        <div className='row justify-content-center'>
            <div className="col-12 col-md-10">
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder={placeholderData}
                        min={props.min_price}
                        max={props.max_price}
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                    <button className="btn btn-danger" type="button" onClick={(e) => handleDenomination(e)}><i className="bi bi-plus"></i></button>
                </div>
            </div>
            <div className="col-12 col-md-10">

                <div className="cssTest"></div>
                <div className="card border-0 ">
                    <div className="card-body bg-body-tertiary mb-0 px-0 px-md-auto">
                        <div className="table-responsive rounded-3 shadow-sm" id='denominationTable'>
                            <table className="table text-center table-striped rounded-3 mb-0 shadow-sm rounded">
                                <thead className='table-danger'>
                                    <tr>
                                        <th scope="col">Amount &#8377;</th>
                                        <th scope="col">Discount &#37;</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Saving &#8377;</th>
                                        <th scope="col">Total &#8377;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {denominationTable && denominationData.map((item, index) =>
                                        <DenominationTableComponent denominationData={item} key={index} />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductDenominationComponent;