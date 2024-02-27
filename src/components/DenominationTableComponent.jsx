import React, { useState, useEffect } from "react";
import QuantityComponent from "./QuantityComponent";
import { nanoid } from "nanoid";

const DenominationTableComponent = ({
  denominationData,
  discounts,
  orderQuantity,
  orderSaveMoney,
  setOrderPaidMoney,
  setorderAmount
}) => {
  const [amount, setAmount] = useState(denominationData.amount);
  const [discount, setDiscount] = useState(discounts);
  const [quantity, setQuantity] = useState(0);
  const [save, setSave] = useState(0);
  const [total, setTotal] = useState(0);

  const totalValue = amount*quantity;

  useEffect(() => {
    calculateMoney(quantity);
    setOrderPaidMoney(total);
    orderQuantity(quantity);
    orderSaveMoney(save);
    setorderAmount(totalValue);
  }, [quantity,total,save,amount]);

  const calculateMoney = (quantity) => {
    if (quantity) {
      let currentAmount = quantity * amount;
      let saveMoney = ((currentAmount / 100) * discount).toFixed(2);
      let moneyToPaid = parseFloat(currentAmount - saveMoney).toFixed(2);
      setQuantity(quantity);
      setSave(saveMoney);
      setTotal(moneyToPaid);
    } else {
      setSave(0);
      setTotal(0);
    }
  };

  return (
    <>
      <tr key={nanoid()}>
        <th scope="row">{amount} &#8377;</th>
        <td>{discount}%</td>
        <td className="d-flex justify-content-center align-items-center">
          <QuantityComponent
            quantity={quantity}
            setQuantity={setQuantity}
            key={nanoid()}
          />
        </td>
        <td className="text-danger fw-bold">{save} &#8377;</td>
        <td>{total} &#8377;</td>
      </tr>
    </>
  );
};

export default DenominationTableComponent;
