import CartButton from "../ui/CartButton";
import Shirt2 from"../assets/products/shirt-2.png";

const Card = () => {
    return (
      <div className="relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
          <img
            src={Shirt2}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-top lg:h-full lg:w-full p-4 bg-gray-100"
          />
        </div>
        <div className="mt-4 px-3 pb-4">
          <div>
            <h3 className="text-sm text-gray-700">Green grandad Shirt</h3>
            <p className="mt-1 text-sm text-gray-500">Mens clothing</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
        {/* <!-- Button --> */}
        <div className="cursor-pointer rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 ring-1 ring-slate-700/10  hover:ring-1 ring-slate-700/10 hover:bg-slate-50 hover:text-slate-900 items-center text-center mb-3 mx-3 flex-1">
          <div className="flex px-3 py-2 justify-center">
            <CartButton/>
            Add To Cart
          </div>
        </div>
      </div>
    );
};

export default Card;