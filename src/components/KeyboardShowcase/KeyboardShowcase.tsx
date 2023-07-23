// import React from 'react'
import keyboardImg from "../../assets/imgs/colorful keyboard.png";

function KeyboardShowcase() {
  return (
    <div className="keyboard-showcase container-fluid my-5">
      <div className="row">
        <div className="col-lg-6">
          <h1>Fully Customizable Mechanical keyboards</h1>
          <div className="buttons">
            <button>Offers</button>
            <button>See More</button>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={keyboardImg} alt="colorful img" />
        </div>
      </div>
    </div>
  );
}

export default KeyboardShowcase;
