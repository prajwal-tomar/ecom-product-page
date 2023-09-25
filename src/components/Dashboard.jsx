import P1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import P2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import P3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import P4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";
import P1 from "../assets/images/image-product-1.jpg";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

import cartIcon from "../assets/images/icon-cart.svg";

import { useState } from "react";

const Dashboard = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const handleAddtoCart = () => {
    console.log(quantity);
  };

  return (
    <div className="md:min-h-[90vh] md:flex md:flex-row flex-col justify-center font-kumbh">
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-y-4">
        <img src={P1} alt="product 1" className="w-96 h-96 rounded-xl" />
        <div className="flex space-x-5">
          <img
            src={P1Thumbnail}
            alt="thumbnail1"
            className="rounded-xl w-20 h-20"
          />
          <img
            src={P2Thumbnail}
            alt="thumbnail1"
            className="rounded-xl w-20 h-20"
          />
          <img
            src={P3Thumbnail}
            alt="thumbnail1"
            className="rounded-xl w-20 h-20"
          />
          <img
            src={P4Thumbnail}
            alt="thumbnail1"
            className="rounded-xl w-20 h-20"
          />
        </div>
      </div>
      <div className="md:w-1/3 w-full flex flex-col space-y-8 justify-center px-10 md:mt-0 mt-10">
        <div className="flex flex-col space-y-4">
          <h2 className="text-orange font-bold text-sm">SNEAKER COMPANY</h2>
          <h1 className="text-5xl font-extrabold">
            Fall Limited Edition Sneakers
          </h1>
        </div>
        <p className="text-black-75">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-col space-y-1 justify-center items-start">
          <div className="flex space-x-5 items-center">
            <h1 className="text-2xl font-bold">$125.00</h1>
            <p className="bg-pale-orange text-orange text-center px-2 rounded-lg font-bold">
              50%
            </p>
          </div>
          <p className="line-through font-bold text-slate-400">$250.00</p>
        </div>
        <div className="flex md:flex-row items-center space-x-3 flex-col">
          <div className="w-80 py-2 bg-slate-100 rounded-xl flex items-center justify-evenly hover:cursor-pointer">
            <img src={iconMinus} alt="iconMinus" onClick={decreaseQuantity} />
            <h1>{quantity}</h1>
            <img src={iconPlus} alt="iconPlus" onClick={increaseQuantity} />
          </div>
          <div
            className="flex md:flex-row  bg-orange px-4 py-4 rounded-xl space-x-3 w-full items-center justify-center hover:cursor-pointer"
            onClick={handleAddtoCart}
          >
            <img src={cartIcon} alt="cart icon" />
            <span className="text-center text-white font-bold">
              Add to cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
