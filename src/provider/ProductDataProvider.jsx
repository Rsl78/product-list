import { useState } from "react";
import { ProductContext } from "../context";
import { useProduct, useDebounce } from "../hooks";
import PropTypes from "prop-types";

const ProductDataProvider = ({ children }) => {
  const [filterCategory, setFilterCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { error, loading, productData } = useProduct(false, filterCategory);

  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  

  let sortedData = [...productData]
  if (debouncedSearchTerm) {
    sortedData = sortedData.filter((product) =>
      product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }
  
  if (sortOrder === "asc") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    sortedData.sort((a, b) => b.price - a.price);
  }

  return (
    <ProductContext.Provider
      value={{
        error,
        loading,
        productData: sortedData,
        setFilterCategory,
        filterCategory,
        selectedCategory,
        setSelectedCategory,
        setSortOrder,
        searchTerm,
        setSearchTerm,
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
