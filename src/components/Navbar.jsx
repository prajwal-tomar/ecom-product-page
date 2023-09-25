import { useState } from "react";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="flex justify-between h-24 border-b-[1px] items-center font-kumbh">
      <div className="flex">
        <img src={logo} alt="logo" className="w-40 h-6 mr-16" />
        <ul className="flex space-x-3 text-black-75">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center space-x-6">
        <img
          src={cartIcon}
          alt="cart icon"
          className="h-5 w-5 hover:cursor-pointer"
          onClick={handleCart}
        />
        <img
          src={avatar}
          alt="avatar"
          className="h-12 w-12 border-orange border-2 rounded-full"
        />
      </div>
      {isCartOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            {/* Cart content goes here */}
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {/* Add cart items and total here */}
            <button
              onClick={closeCart}
              className="bg-slate-200 px-4 py-2 rounded-lg"
            >
              Close Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
