import React, { useEffect, useState } from 'react'

function PrintError({ message, alertStatus }) {
    const [status, setStatus] = useState('alert-danger')
   
    useEffect(() => {
        if (alertStatus === 'Error') {
            setStatus('alert-danger');
        } else if (alertStatus === 'Success') {
            setStatus('alert-success');
        } else if (alertStatus === 'Warning') {
            setStatus('alert-warning');
        } else {
            setStatus('alert-info');
        }
    }, [alertStatus]);

    return (
        <div className='container bg-light'>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <div className={`alert ${status} alert-dismissible fade show mt-4`} role="alert">
                    <strong>{message}</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintError