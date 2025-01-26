import { useState } from "react";
import { ProductContext } from "../context";
import { useProduct } from "../hooks";
import PropTypes from "prop-types";

const ProductDataProvider = ({ children }) => {
  // const [order, setOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { error, loading, productData } = useProduct(false, filterCategory);

  

  return (
    <ProductContext.Provider
      value={{
        error,
        loading,
        productData,
        setFilterCategory,
        filterCategory,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductDataProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductDataProvider;
