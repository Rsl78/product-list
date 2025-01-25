import { useState } from "react";
import { ProductContext } from "../context";
import { useProduct } from "../hooks";
import PropTypes from "prop-types";

const ProductDataProvider = ({ children }) => {
  const [order, setOrder]= useState("");
  const [category, setCategory]= useState("");
  const { error, loading, productData } = useProduct(false,order, category);

  return (
    <ProductContext.Provider value={{ error, loading, productData, setOrder, setCategory, order, category }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductDataProvider.propTypes = {
    children: PropTypes.node,
}

export default ProductDataProvider;
