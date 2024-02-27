import React, { useEffect, useState } from 'react'
import { fetchUserProfile } from '../api';
import { userLoginStatus } from '../Functions';

function OrderPayComponent({totalAmount,discount,orderSaveMoney,orderPaidMoney}) {
    const [profileData, setProfileData] = useState();
    const [loading, setLoading] = useState(true);

    const {USER_LOGIN_INFO} = userLoginStatus();
    useEffect(()=>{
        if(USER_LOGIN_INFO){
            getUserDetails();
        }else{
            // alert('you are not login ')
        }
    },[USER_LOGIN_INFO])

    const getUserDetails = async () => {
        let data = await fetchUserProfile();
        if (data?.data) {
          setProfileData(data?.data);
          setLoading(false);
        }
      };

  return (
    <>
         <div className="card border-primary mb-3"
                style={{ maxWidth: "100%" }}
              >
                <div className="card-header bg-primary border-primary text-white text-start text-uppercase">
                  Order Overview
                </div>
                <div className="card-body text-success">
                  <ul className="list-group border-0">
                    <li className="list-group-item border-0">
                      <span className="float-start fw-bold"> Total Value</span>
                      <span className="float-end text-secondary fw-bold">{totalAmount}</span>
                    </li>
                    <li className="list-group-item border-0">
                      <span className="float-start fw-bold">
                        
                        Discount ({discount}%)
                      </span>
                      <span className="float-end text-secondary fw-bold">{orderSaveMoney}</span>
                    </li>
                    <li className="list-group-item border-0">
                      <span className="float-start fw-bold">
                        
                        Reward Points
                      </span>
                      <span className="float-end text-secondary fw-bold ">{0}</span>
                    </li>
                    <li className="list-group-item border-0">
                      <span className="float-start fw-bold"> Final Amount</span>
                      <span className="float-end text-secondary fw-bold">{orderPaidMoney}</span>
                    </li>
                  </ul>
                  <hr />
                  <div className="detail-form mt-3 mb-2">
                    <h6 className="fw-bold text-dark">Receiver Details :</h6>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control border-0 bg-light disabled"
                        value={profileData?.name ? profileData?.name : ''}
                        readOnly
                        disabled
                        />
                    </div>
                    <div className="mb-3 ">
                      <input
                        type="number"
                        className="form-control border-0 bg-light disabled"
                        value={profileData?.mobile ? profileData?.mobile : ''}
                        readOnly
                        disabled
                        />
                    </div>
                    <div className="mb-3 ">
                      <input
                        type="email"
                        className="form-control border-0 bg-light disabled"
                        value={profileData?.email ? profileData?.email : ''}
                        readOnly
                        disabled
                      />
                    </div>
                  </div>
                  <hr />
                  <ul className="list-group">
                    <li className="list-group-item">
                      <label className="form-check-label" htmlFor="firstCheckbox">
                      Pay with wallet
                      <span className="d-block">Available balance : ₹{profileData?.balance ? profileData?.balance : '0'}</span>
                      </label>
                      <input
                        className="form-check-input me-1 float-end p-3 rounded-2"
                        type="checkbox"
                        value=""
                        id="firstCheckbox"
                      />
                    </li>
                  </ul>
                </div>
                <div className="card-footer bg-primary border-primary text-white text-center text-uppercase py-2 ">pay <span>₹{orderPaidMoney}</span></div>
              </div>
    </>
  )
}

export default OrderPayComponent