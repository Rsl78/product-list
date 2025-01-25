import { useContext } from "react";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
import { ProductContext } from "../context";

const CardBoard = () => {
  const { loading, productData } = useContext(ProductContext);
  console.log(productData);
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {loading ? (
              <CardSkeleton />
            ) : (
              productData.map((product) => {
                return <Card key={product.id} product={product} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBoard;
