// import { useCallback } from "react";
import { useEffect, useState } from "react";

const useProduct = () => {
  const [productData, setProductData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/?sort=asc`
        );
        if (!response.ok) {
          const errorMessage = `An error has occured: ${response.status}`;
          throw new Error(errorMessage);
        }
        const data = await response.json();
        
        if (JSON.stringify(data) !== JSON.stringify(productData)) {
          setProductData(data);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [productData]);

  return { productData, loading, error };
};

export default useProduct;
