import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAddCart }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={() => handleAddCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
