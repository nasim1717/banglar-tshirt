import React from "react";
import Friend from "../Friend/Friend";

const Cusion = ({ children, hasFriend, ring }) => {
  return (
    <div>
      <h2>Cusion</h2>
      <p>
        <small>{children}</small>
      </p>
      {hasFriend && <Friend ring={ring}></Friend>}
    </div>
  );
};

export default Cusion;
