import PropTypes from "prop-types";
import { CartContext } from "../context";
import { useLocalStorage } from "../hooks";

const CartDataProvider = ({ children }) => {
  const [cartData, setCartData] = useLocalStorage("cartData", []);

  const addToCart = (productId) => {
    setCartData((prev) => [...prev, { productId: productId }]);
  };

  const removeFromCart = (productId) => {
    const restCartData = cartData.filter(
      (cart) => cart.productId !== productId
    );
    setCartData(restCartData);
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, cartData }}>
      {children}
    </CartContext.Provider>
  );
};

CartDataProvider.propTypes = {
  children: PropTypes.node,
};

export default CartDataProvider;
