import React, { useState } from "react";
import PrintError from "./PrintError";
import { fetchStatusChangePassword } from "../api";

function PasswordChangeComponent() {
  const [oldPassword, setOldPassword] = useState("");
  const [errorData, setErrorData] = useState();
  const [errorStatus, setErrorStatus] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const ERROR_STATUSES = Object.freeze({
    IDLE: "Success",
    ERROR: "Error",
    WARNING: "Warning",
  });

  const handlePasswordChange = (oldPassword, password, confirmPassword) => {
    const trimmedOldPassword = oldPassword.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    if (
      trimmedOldPassword.length >= 6 &&
      trimmedPassword.length >= 6 &&
      trimmedConfirmPassword.length >= 6
    ) {
      if (trimmedPassword === trimmedConfirmPassword) {
        changePassword({
          old_password: trimmedOldPassword,
          new_password: trimmedConfirmPassword,
        });
      } else {
        //password not match
        const message = "Passwords Do not Match.";
        setErrorData({ message, status: ERROR_STATUSES.ERROR });
        setErrorStatus(true);
      }
    } else {
      const message = "Passwords Length should be at least 6 characters.";
      setErrorData({ message, status: ERROR_STATUSES.ERROR });
      setErrorStatus(true);
    }
  };

  const changePassword = async (inputData) => {
    let data = await fetchStatusChangePassword(inputData);
    if (data?.status) {
      setErrorData({ message:data?.message, status: ERROR_STATUSES.IDLE });
      setErrorStatus(true);
      setLoading(false);
      setOldPassword('')
      setPassword('')
      setConfirmPassword('')
    }
  };

  return (
    <div className="row d-flex justify-content-center  align-items-start ">
      <div className="col-12">
        <div className="row justify-content-center">
          <div className="col-12 mb-4">
            <h4 className="display-5 text-center">Change Password</h4>
          </div>

          {errorStatus && (
            <PrintError
              message={errorData.message}
              alertStatus={errorData.status}
            />
          )}

          <div className="col-10 shadow-sm rounded-3 p-3 bg-light">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePasswordChange(oldPassword, password, confirmPassword);
              }}
            >
              <div className="mb-3">
                <label htmlFor="oldPassword" className="form-label">
                  Old Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="oldPassword"
                  autoComplete="false"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  autoComplete="false"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  autoComplete="false"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-danger">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordChangeComponent;
