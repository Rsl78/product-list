import { useContext, useEffect, useState } from "react";
import CartButton from "../ui/CartButton";
import PropTypes from "prop-types";
import { CartContext } from "../context";

const Card = ({ product }) => {
  const { cartData, addToCart, removeFromCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const checkProduct = cartData.find((cart) => cart.productId === product.id);
    if (checkProduct) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [product.id, cartData]);

  const handleCartData = () => {
    const checkProduct = cartData.find((cart) => cart.productId === product.id);

    if (!checkProduct) {
      addToCart(product.id);
    }else{
      removeFromCart(product.id);
    }
  };

  const { title, price, image, category } = product;
  return (
    <div className="relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
        />
      </div>
      <div className="mt-4 px-3 pb-4">
        <div>
          <h3 className="text-sm text-gray-700">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{category} </p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
      {/* <!-- Button --> */}
      <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
        <div
          className="flex px-3 py-2 justify-center"
          onClick={() => handleCartData()}
        >
          <CartButton />
          {isAdded ? "Remove from cart" : "Add to cart"}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Card;
