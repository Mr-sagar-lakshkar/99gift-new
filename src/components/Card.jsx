import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import img from "../../src/new_logo.png";

import "./components-styles/Card.css";

const Card = ({ title, discount, item, image }) => {
  const nanoKey = nanoid();
  // return (
  //   <div
  //     key={nanoKey}
  //     className="voucher-card rounded mx-md-3 mx-2 mb-5 overflow-hidden position-relative d-flex justify-content-center flex-column align-items-center"
  //   >
  //     <Link to={`/products/${encodeURIComponent(title)}/${item?.id}`}>
  //       <img src={item.image} className="img-fluid w-100" alt={title} />
  //       <div className="discount text-dark fw-bold">
  //         Discount: {`${item.discount}`}%
  //       </div>

  //       <div className="d-block card-title px-3 overflow-hidden">
  //         <p
  //           className="card-title text-dark"
  //           style={{ textDecoration: "none" }}
  //         >
  //           {title}
  //         </p>
  //       </div>
  //     </Link>
  //   </div>
  // );

      return (
          <div key={nanoKey} className="voucher-card rounded mx-md-3 mx-2 mb-5 overflow-hidden position-relative d-flex justify-content-center flex-column" >
              <Link to={`/products/${encodeURIComponent(title)}/${item?.id}`} >
                  <img src={image} className="img-fluid w-100 pt-0 rounded shadow-sm border border-1 object-fit-cover" alt={title} style={{ height: "190px" }} />

                  <div className='d-block px-1 mt-3 mb-3 card-title px-3 overflow-hidden'>
                      <p className='card-title text-dark' style={{ textDecoration: "none" }}>{title.slice(0, 45)}...</p>
                  </div>
              </Link>

              <div className='card-bedge pt-0 pb-2 '>
                  <span className="badge rounded rounded-0 text-bg-danger float-end w-100">{discount}% Discount</span>
              </div>
          </div>
  )
};

export default Card;
