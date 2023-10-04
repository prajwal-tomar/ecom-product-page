import P1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import P2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import P3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import P4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";
import P1 from "../assets/images/image-product-1.jpg";
import P2 from "../assets/images/image-product-2.jpg";
import P3 from "../assets/images/image-product-3.jpg";
import P4 from "../assets/images/image-product-4.jpg";
import iconPlus from "../assets/images/icon-plus.svg";
import iconMinus from "../assets/images/icon-minus.svg";

import cartIcon from "../assets/images/icon-cart.svg";
import LightboxGallery from "./LightboxGallery";

const images = [
  {
    imageUrl: P1,
    thumbnailUrl: P1Thumbnail,
  },
  {
    imageUrl: P2,
    thumbnailUrl: P2Thumbnail,
  },
  {
    imageUrl: P3,
    thumbnailUrl: P3Thumbnail,
  },
  {
    imageUrl: P4,
    thumbnailUrl: P4Thumbnail,
  },
];

const Dashboard = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  handleCart,
}) => {
  return (
    <div className="min-h-[90vh] md:flex md:flex-row flex-col justify-center mb-10 font-kumbh">
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-y-4">
        <img src={P1} alt="product 1" className="w-96 h-96 md:rounded-xl" />
        <div className="flex space-x-5">
          <LightboxGallery images={images} />
        </div>
      </div>
      <div className="md:w-1/2 w-[100%] flex flex-col md:space-y-8 space-y-3 justify-center px-10 md:mt-0 mt-5">
        <div className="flex w-[80%] flex-col md:space-y-4 space-y-2">
          <h2 className="text-orange font-bold text-xs">SNEAKER COMPANY</h2>
          <h1 className="md:text-5xl text-3xl font-extrabold">
            Fall Limited Edition Sneakers
          </h1>
        </div>
        <p className="text-black-75 md:text-lg text-sm w-[80%]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-col space-y-1 justify-center items-start">
          <div className="flex space-x-5 items-center">
            <h1 className="md:text-2xl text-xl font-bold">$125.00</h1>
            <p className="bg-pale-orange text-orange text-center px-2 rounded-lg font-bold">
              50%
            </p>
          </div>
          <p className="line-through md:text-lg font-bold text-slate-400">$250.00</p>
        </div>
        <div className="flex md:flex-row items-center md:space-x-3 space-y-3 flex-col md:w-[70%] w-[100%] mb-10">
          <div className="md:w-80 w-full h-14 bg-slate-100 rounded-xl flex items-center justify-evenly hover:cursor-pointer">
            <img src={iconMinus} alt="iconMinus" onClick={decreaseQuantity} />
            <h1>{quantity}</h1>
            <img src={iconPlus} alt="iconPlus" onClick={increaseQuantity} />
          </div>
          <div
            className="flex md:flex-row  bg-orange px-4 py-4 rounded-xl space-x-3 w-full items-center justify-center hover:cursor-pointer"
            onClick={handleCart}
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
