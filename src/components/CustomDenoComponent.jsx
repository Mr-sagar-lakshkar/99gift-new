import React, { useEffect, useState } from "react";
import DenominationTableComponent from "./DenominationTableComponent";
import "./components-styles/ProductDenominationComponent.css";
import { useSelector } from "react-redux";

const CustomDenoComponent = ({ denominationData }) => {
  const denominationTable = [
    ...denominationData,
    {
      amount: denominationData?.amount,
      discount: denominationData?.discount,
      quantity: denominationData?.quantity,
    },
  ];
  //   const products = useSelector((state) => state.ProductDetailReducer);
  //   const ProductDetail = products?.products;
  //   const productDeno = ProductDetail?.denomination;

  //   // const denominationTableData = {
  //   //     amount:,
  //   //     discount:,
  //   //     quantity: ,
  //   //     total: ,
  //   // }

  //   console.log(products);

  //   const [amount, setAmount] = useState();
  //   const [quantity, setQuantity] = useState(1);
  //   const [discount, setDiscount] = useState(1);
  //   const [totalMoney, setTotalMoney] = useState("");
  //   const [minPrice, setMinPrice] = useState();
  //   const [maxPrice, setMaxPrice] = useState();
  //   const [denominationTable, setDenominationTable] = useState([
  //     {
  //       amount: '',
  //           discount: '',
  //           minPrice: '',
  //           maxPrice: '',
  //           quantity: '',
  //     }
  //   ]);

  //   // let denominationTable = [];

  //   useEffect(() => {

  //   }, [denominationTable,amount]);

  //   // console.log("ProductDetail?.amount => ", ProductDetail?.amount);
  //   // console.log("ProductDetail?.min_price => ", ProductDetail?.min_price);
  //   // console.log("ProductDetail?.max_price => ", ProductDetail?.max_price);
  //   // console.log("amount", amount);

  //   function handleDenomination() {
  //     console.log("click ");
  //     if (!ProductDetail?.amount) {
  //       let _denominationTable = []
  //       _denominationTable['amount']=200
  //       _denominationTable['discount']=100
  //       _denominationTable['minPrice']=50
  //       _denominationTable['quantity']=2
  //       _denominationTable['maxPrice']=1000
  //       console.log(_denominationTable)
  //       setDenominationData(_denominationTable)
  //     }
  //     console.log(("denominationTable =>", denominationTable));
  //   }
  //   console.log(("denominationTable =>", denominationTable));
  //   console.log(("denominationTable =>", denominationTable));
  //   // console.log(denominationTable)

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10"></div>
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
                    <th scope="col">Total &#8377;</th>
                  </tr>
                </thead>
                <tbody>
                  {denominationTable?.map((item, index) => (
                    <DenominationTableComponent
                      key={index}
                      denominationData={item}
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

export default CustomDenoComponent;
