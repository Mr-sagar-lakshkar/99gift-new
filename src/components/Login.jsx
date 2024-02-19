import React, { useState } from 'react';
import './components-styles/Login.css'
import Header from './Header';
import PrintError from './PrintError';

function Login() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // validate user Input
        const validateResult = validate(phone, password);
        if (!validateResult) {
            printError('Please Input Correct Value.', 'danger')
        }
    }

    const validate = (phone, password) => {
        phone = phone.trim();
        password = password.trim();

        const validPhoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

        if (phone.length < 10) {
            const message = "Phone number should be at least 10 characters.";
            printError(message, 'Danger')
            return false;
        }

        if (phone.match(validPhoneRegex) && password.length >= 6) {
            const message = "Valid Input!";
            printError(message, 'Success')
            return true;
        } else {
            if (!phone.match(validPhoneRegex)) {
                const message = "Invalid Phone Number Input";
                printError(message, 'Danger')
            }

            if (password.length < 6) {
                const message = "Password should be at least 6 characters.";
                printError(message, 'Danger')
            }

            return false;
        }
    };

    const printError = (message, type) => {
        return (
            <PrintError message={message} status={type} />
        );
    }

    return (
        <>
            <Header />
            <div className='container bg-light loginContainer'>
                <div className="row justify-content-center mt-2 rounded-3 px-lg-5 py-lg-5 w-100">
                    <div className="col-12 col-sm-10 col-md-8 col-12">
                        <h3 className='display-4 text-center'>Login</h3>
                    </div>
                    <div className="col-12 col-sm-10 col-md-8 col-12">

                        <form className='mt-4 shadow-sm px-4 w-100 py-4 d-flex justify-content-center flex-column bg-light shadow-sm'>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Mobile Number</label>
                                <input type="text" className="form-control" id="email" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login