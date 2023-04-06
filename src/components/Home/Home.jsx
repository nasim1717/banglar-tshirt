import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "../Cart/Cart";
import toast from "react-hot-toast";
import "./Home.css";

const Home = () => {
  const thsirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddCart = (tshirt) => {
    // console.log(tshirt);
    const exists = cart.find((ts) => ts._id === tshirt._id);
    // console.log(exists);
    if (exists) {
      toast("You have alerday added this t-shirt");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  const handleRemoveFromCart = (id) => {
    // console.log(id);
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {thsirts.map((tshirt) => (
          <Tshirt key={tshirt._id} tshirt={tshirt} handleAddCart={handleAddCart}></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
