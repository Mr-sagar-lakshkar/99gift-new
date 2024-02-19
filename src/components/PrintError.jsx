import React, { useState } from 'react'

function PrintError({ message, messgaeType }) {
    const [status, setStatus] = useState('alert-danger')
    if (messgaeType == 'Error') {
        setStatus('alert-danger');
    } else if (messgaeType == 'Success') {
        setStatus('alert-success');
    } else if (messgaeType == 'Warning') {
        setStatus('alert-warning');
    } else {
        setStatus('alert-info');
    }

    return (
        <div className='container bg-light'>
            <div className="row">
                <div className="col-12">
                    <div class={`alert ${status}`} role="alert">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrintError