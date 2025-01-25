import { useContext } from "react";
import { ProductContext } from "../context";
import PropTypes from "prop-types";

const SortModal = ({ setShowSortModal }) => {
  const { setOrder } = useContext(ProductContext);

  const handleOrder = (sortOrder) => {
    setOrder(sortOrder);
    setShowSortModal(false);
  };

  return (
    <div
      className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1" role="none">
        <span
          className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          tabIndex="-1"
          //   onClick="toggleDropdown()"
          onClick={() => handleOrder("asc")}
          id="menu-item-0"
        >
          Low to High
        </span>
        <span
          href=""
          className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          tabIndex="-1"
          onClick={() => handleOrder("desc")}
          id="menu-item-0"
        >
          High to Low
        </span>
      </div>
    </div>
  );
};

SortModal.propTypes = {
  setShowSortModal: PropTypes.func,
};

export default SortModal;