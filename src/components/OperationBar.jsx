import { useContext, useState } from "react";
import CartButton from "../ui/CartButton";
import FilterButton from "../ui/FilterButton";
import SearchButton from "../ui/SearchButton";
import SortButton from "../ui/SortButton";
import FilterModal from "./FilterModal";
import SortModal from "./SortModal";
import { CartContext } from "../context";

const OperationBar = () => {
  const [showSortModal, setShowSortModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [term, setTerm] = useState("");

  const {cartData} = useContext(CartContext)

  console.log(term)
  return (
    <div className="mt-10">
      <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => setShowSortModal(!showSortModal)}
              >
                Sort
                <SortButton />
              </button>
            </div>
            {showSortModal && <SortModal/>}
          </div>
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-400 hover:text-gray-500 focus:text-gray-700 transition-all"
                id="filter-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => setShowFilterModal(!showFilterModal)}
              >
                Filter
                <FilterButton />
              </button>
            </div>
            {showFilterModal && (
              <FilterModal setShowFilterModal={setShowFilterModal} />
            )}
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="flex flex-1 items-center px-3.5 py-2 text-gray-400 group hover:ring-1 hover:ring-gray-300 focus-within:!ring-2 ring-inset focus-within:!ring-teal-500 rounded-md">
            <SearchButton />
            <input
              className="block w-full appearance-none bg-transparent text-base text-gray-700 placeholder:text-gray-400 focus:outline-none placeholder:text-sm sm:text-sm sm:leading-6"
              placeholder="Find anything..."
              aria-label="Search components"
              id="headlessui-combobox-input-:r5n:"
              role="combobox"
              type="text"
              aria-expanded="false"
              aria-autocomplete="list"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              //   style="caret-color: rgb(107, 114, 128)"
            />
          </div>
          <div className="flow-root">
            <a href="#" className="group -m-2 flex items-center p-2">
              <CartButton />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {cartData.length}
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationBar;
