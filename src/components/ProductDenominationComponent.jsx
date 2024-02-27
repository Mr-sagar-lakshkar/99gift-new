import React, { useEffect, useState } from "react";
import DenominationTableComponent from "./DenominationTableComponent";
import "./components-styles/ProductDenominationComponent.css";
import { useSelector } from "react-redux";

const ProductDenominationComponent = ({
  denominationDatNotAvailable: props,
  discount,
  denominations,
  setOrderPaidMoney,
  setOrderSaveMoney,
  setorderAmount
}) => {
  const ProductDetail = useSelector((state) => state.ProductDetailReducer);
  const product = ProductDetail?.products;

  // Hooks
  const [amount, setAmount] = useState();
  const [quantity, setQuantity] = useState(1);
  const [denominationTable, setDenominationTable] = useState(true);
  const [denoRange, setDenoRange] = useState([]);
  const [handleQuantity, setHandleQuantity] = useState(0);
  const [totalMoney, setTotalMoney] = useState("");

  // const[orderSaveMoney,setOrderSaveMoney] = useState(0)
  // const[orderPaidMoney,setOrderPaidMoney] = useState(0)

  const [showRange, setShowRange] = useState(false);

  // Internal Variables
  const placeholderData = `Input Between min:${props.min_price} and max:${props.max_price}`;
  //   const discount = props.percentage;
  const saveMoney = (amount / 100) * discount;
  const moneyToPaid = parseFloat(amount - saveMoney).toFixed(2);

  useEffect(() => {
    // OrderPaidMoney();
    // orderSaveMoney();
  }, [amount,handleQuantity]);


  // handleDenomination function : when user input on range input field
  const handleDenomination = (e) => {
    e.preventDefault();

    // console.log("amount is not presented in the array ");
    // check the user input value
    const validateInput = handleDenominationInputValue(amount);
    if (validateInput) {
      //   setDenominationTable(true);
      setDenoRange([
        ...denoRange,
        {
          amount: amount,
        },
      ]);
      setAmount("");
    } else {
      alert("Please Enter Valid Input.");
    }
  };

  const handleDenominationInputValue = (value) => {
    if (value >= props.min_price && value <= props.max_price) {
      return true;
    }
    return false;
  };

  return (
    <div className="row justify-content-center">
      {denominations?.length == 0 && (
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
            <button
              className="btn btn-danger"
              type="button"
              onClick={(e) => handleDenomination(e)}
            >
              <i className="bi bi-plus"></i>
            </button>
          </div>
        </div>
      )}
      <div className="col-12 col-md-10">
        <div className="cssTest"></div>
        <div className="card border-0 ">
          <div className="card-body bg-body-tertiary mb-0 px-0 px-md-auto">
            <div
              className="table-responsive rounded-3 shadow-sm"
              id="denominationTable"
            >
              <table className="table text-center table-striped rounded-3 mb-0 shadow-sm rounded">
                <thead className="table-danger">
                  <tr>
                    <th scope="col">Amount &#8377;</th>
                    <th scope="col">Discount &#37;</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Saving &#8377;</th>
                    <th scope="col">Total &#8377;</th>
                  </tr>
                </thead>
                <tbody>
                  {denominations?.length == 0
                    ? denoRange?.map((item, index) => (
                        <DenominationTableComponent
                          denominationData={item}
                          key={index}
                          discounts={discount}
                          orderQuantity={setHandleQuantity}
                          orderSaveMoney={setOrderSaveMoney}
                          setOrderPaidMoney={setOrderPaidMoney}
                          setorderAmount={setorderAmount}
                          />
                          ))
                          : denominations?.length > 0 &&
                          denominations?.map((item, index) => (
                            <DenominationTableComponent
                            denominationData={item}
                            key={index}
                            discounts={discount}
                            orderQuantity={setHandleQuantity}
                            orderSaveMoney={setOrderSaveMoney}
                            setOrderPaidMoney={setOrderPaidMoney}
                            setorderAmount={setorderAmount}
                        />
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDenominationComponent;
