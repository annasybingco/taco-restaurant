import React, { useState } from "react";
import "./QuantitySelector.scss";
import add from "../../assets/icons/add.svg";
import subtract from "../../assets/icons/subtract.svg";

function QuantitySelector({ count, setCount, minValue = 1, maxValue = 100 }) {
  // Increment function
  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  // Decrement function
  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };

  return (
    <div className="btn-group">
      <button className="btn" onClick={handleDecrementCounter}>
        <span className="material-symbol">
          <img src={subtract} alt="subtract-symbol" />
        </span>
      </button>
      <p className="qty-sel">{count}</p>
      <button className="btn" onClick={handleIncrementCounter}>
        <span className="material-symbol">
          <img src={add} alt="add-symbol" />
        </span>
      </button>
    </div>
  );
}

export default QuantitySelector;
