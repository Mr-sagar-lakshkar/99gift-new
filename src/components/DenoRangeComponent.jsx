import React, { useState } from "react";

function DenoRangeComponent({ min, max, setPrice }) {
  const [amount, setAmount] = useState('');

 
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          placeholder={`${min} - ${max}`}
          min={min}
          max={max}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => setPrice(amount)}
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </>
  );
}

export default DenoRangeComponent;
