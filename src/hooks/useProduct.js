// import { useCallback } from "react";
import { useEffect, useState } from "react";

const useProduct = (isCategory, filtredCategory="") => {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState(isCategory);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);

        if (categoryData) {
          const response = await fetch(
            `https://fakestoreapi.com/products/categories`
          );
          if (!response.ok) {
            const errorMessage = `An error has occured: ${response.status}`;
            throw new Error(errorMessage);
          }
          const data = await response.json();

          if (JSON.stringify(data) !== JSON.stringify(categoryData)) {
            setCategoryData(data);
          }
        } else {
          console.log(filtredCategory);
          const response = await fetch(
            filtredCategory === "" ? `https://fakestoreapi.com/products/`:
            `https://fakestoreapi.com/products/category/${filtredCategory}`
          );
          console.log(
            filtredCategory === ""
              ? `https://fakestoreapi.com/products/`
              : `https://fakestoreapi.com/products/category/${filtredCategory}`
          );

          if (!response.ok) {
            const errorMessage = `An error has occured: ${response.status}`;
            throw new Error(errorMessage);
          }
          const data = await response.json();

          if (JSON.stringify(data) !== JSON.stringify(productData)) {
            setProductData(data);
          }
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [productData, categoryData, filtredCategory]);

  return { categoryData,productData, loading, error };
};

export default useProduct;
