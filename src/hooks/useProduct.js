// import { useCallback } from "react";
import { useEffect, useState } from "react";

const useProduct = (isCategory, order="", category="") => {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState(isCategory);
  // const [sortOrder, setOrder] = useState(order);
  // const [filterCategory, setFilterCategory] = useState(category);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  // console.log(order)
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        
        if(categoryData){
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
        }else{
          console.log(order)
            const response = await fetch(
              `https://fakestoreapi.com/products/${category}?sort=${order}`
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
  }, [productData, categoryData,category,order]);

  return { categoryData,productData, loading, error };
};

export default useProduct;
