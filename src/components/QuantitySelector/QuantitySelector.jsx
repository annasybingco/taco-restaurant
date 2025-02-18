import React, { useState } from "react";
import "./QuantitySelector.scss";
import add from "../../assets/icons/add.svg";
import subtract from "../../assets/icons/subtract.svg";

function QuantitySelector({ minValue = 0, maxValue = 100 }) {
  const [count, setCount] = useState(minValue);

  //function to handle incrementing the counter

  const handleIncrementCounter = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
    }
  };

  //function to handle decrement

  const handleDecrementCounter = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
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
