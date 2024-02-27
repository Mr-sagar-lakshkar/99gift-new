import React from "react";
import DenominationTableComponent from "./DenominationTableComponent";

function ProductDenominatinDefault({denominationData}) {

    console.log('denominationData =>',denominationData)
  return (
    <>
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
                  {/* {denominationData && denominationData.map((item, index) => (
                      <DenominationTableComponent
                        denominationData={item}
                        key={index}
                      />
                    ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDenominatinDefault;
