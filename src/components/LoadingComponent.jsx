import React from 'react'

function LoadingComponent() {
    return (
        <>
            <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: "25vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden text-center">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default LoadingComponent