import P1 from "../assets/images/image-product-1.jpg";
import close from "../assets/images/icon-close.svg";

const Cart = ({ quantity, closeCart }) => {
  return (
    <div className="absolute md:w-80 md:h-52 md:top-20 md:right-28 top-28 right-10 w-[80%] mx-auto flex flex-col p-5 z-90 rounded-lg shadow-2xl bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-md font-bold">Cart</h1>
        <img src={close} alt="cart close" onClick={closeCart} />
      </div>
      <hr />
      <div className="flex items-center justify-center h-full w-full">
        {quantity === 0 ? (
          <h1 className="text-slate-500">Your cart is empty.</h1>
        ) : (
          <div className="flex flex-col space-y-6">
            <div className="flex space-x-3 items-center">
              <img src={P1} alt="p1" className="w-10 h-10 rounded-md" />
              <div>
                <h1 className="text-sm">Fall Limited Edition Sneakers</h1>
                <p>
                  $125.00 x {quantity} ={" "}
                  <span className="font-bold">${125 * quantity}</span>{" "}
                </p>
              </div>
            </div>
            <div className="bg-orange rounded-lg py-2 px-4">
              <h1 className="text-center text-white">Checkout</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
