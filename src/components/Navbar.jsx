import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import logo from "../assets/images/logo.svg";
import menuIcon from "../assets/images/icon-menu.svg";
import Cart from "./Cart";

const Navbar = ({ quantity, isCartOpen, handleCart, closeCart }) => {

  return (
    <div className="flex justify-between h-24 border-b-[1px] items-center font-kumbh md:px-0 px-3">
      <div className="flex hover:cursor-pointer items-center">
        <img src={menuIcon} alt="hamburger" className="h-4 w-4 mr-3 md:hidden" />
        <img src={logo} alt="logo" className="w-40 h-6 md:mr-16" />
        <ul className="md:flex hidden space-x-3 text-black-75 hover:cursor-pointer">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex items-center md:space-x-6 space-x-3">
        <img
          src={cartIcon}
          alt="cart icon"
          className="h-5 w-5 hover:cursor-pointer"
          onClick={handleCart}
        />
        <img
          src={avatar}
          alt="avatar"
          className="md:h-12 md:w-12 h-8 w-8 border-orange border-2 rounded-full"
        />
      </div>
      {isCartOpen && <Cart quantity={quantity} closeCart={closeCart} />}
    </div>
  );
};

export default Navbar;
