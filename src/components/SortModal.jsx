import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../context";

const SortModal = ({ setShowSortModal }) => {
  const { setSortOrder } = useContext(ProductContext);

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
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
          onClick={() => handleSortOrderChange("asc")}
          id="menu-item-0"
        >
          Low to High
        </span>
        <span
          href=""
          className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
          role="menuitem"
          tabIndex="-1"
          onClick={() => handleSortOrderChange("desc")}
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