import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [quantity, setQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    setIsCartOpen(true);
    console.log("pressed...");
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  return (
    <div className="md:px-40 min-h-screen">
      <Navbar
        quantity={quantity}
        isCartOpen={isCartOpen}
        handleCart={handleCart}
        closeCart={closeCart}
      />
      <Dashboard
        quantity={quantity}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        handleCart={handleCart}
      />
    </div>
  );
};

export default App;
