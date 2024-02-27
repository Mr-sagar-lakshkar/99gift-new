import React, { useEffect, useState } from "react";
import PasswordChangeComponent from "../components/PasswordChangeComponent";
import Header from "../components/Header";
import { fetchUserProfile } from "../api";

function ProfilePage() {
  const [profileData, setProfileData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!profileData) {
      getUserDetails();
    }
  }, []);

  const getUserDetails = async () => {
    let data = await fetchUserProfile();

    if (data?.data) {
      setProfileData(data?.data);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="row d-flex justify-content-center align-items-start pt-5">
        <div className="col-12 col-lg-6">
          <div className="row justify-content-center">
            <div className="col-12 mb-4">
              <h4 className="display-5 text-center">Profile Details</h4>
            </div>
            <div className="col-10 shadow-sm rounded-3 p-3 bg-light">
              <ul className="list-group">
                <li className="list-group-item bg-light">
                  <span className="text-uppercase fw-bold">USER ID </span> :{" "}
                  <span>{profileData?.["id"]}</span>
                </li>
                <li className="list-group-item bg-light">
                  <span className="text-uppercase fw-bold">NAME </span> :{" "}
                  <span>{profileData?.["name"]}</span>
                </li>
                <li className="list-group-item bg-light">
                  <span className="text-uppercase fw-bold">MOBILE </span> :{" "}
                  <span>{profileData?.["mobile"]}</span>
                </li>
                <li className="list-group-item bg-light">
                  <span className="text-uppercase fw-bold">EMAIL </span> :{" "}
                  <span>{profileData?.["email"]}</span>
                </li>
                <li className="list-group-item bg-light">
                  <span className="text-uppercase fw-bold">LAST LOGIN </span> :{" "}
                  <span>{profileData?.["last_login"]}</span>
                </li>
                <li className="list-group-item bg-light">
                  <span className="text-uppercase fw-bold">BALACE </span> :{" "}
                  <span>{profileData?.["balance"]}</span>
                </li>
                {/* <li className="list-group-item bg-light">
                                <span className="text-uppercase fw-bold">BALACE </span> : <span>{profileData?.['balance']}</span>
                            </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <PasswordChangeComponent />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
