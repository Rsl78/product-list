import { ProductContext } from "../context";
import { useProduct } from "../hooks";
import PropTypes from "prop-types";

const ProductDataProvider = ({ children }) => {
  const { error, loading, productData } = useProduct();
  return (
    <ProductContext.Provider value={{ error, loading, productData }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductDataProvider.propTypes = {
    children: PropTypes.node,
}

export default ProductDataProvider;
