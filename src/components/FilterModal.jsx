import { CategoryContext, ProductContext } from "../context";
import { useContext} from "react";
import PropTypes from "prop-types";

const FilterModal = ({ setShowFilterModal }) => {
  const { categoryData } = useContext(CategoryContext);
  const { setFilterCategory, setSelectedCategory, selectedCategory } = useContext(ProductContext);
  

  const handleCategoryChange = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      setFilterCategory("");
    } else {
      setSelectedCategory(category);
      setFilterCategory(category);
    }
    setShowFilterModal(false)
  };

  // console.log("Category Data", categoryData);
  return (
    <div
      className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="filter-button"
      id="filter-dropdown"
    >
      <div className="py-1" role="none">
        {categoryData.map((category, index) => (
          <label
            key={index}
            className="inline-flex w-full cursor-pointer hover:bg-gray-50 items-center px-4 py-2 text-sm text-gray-700"
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4"
              id="filter-option-1"
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
              onClick={setShowFilterModal}
              value={category}
            />

            <span onClick={setShowFilterModal} className="ml-2">
              {category}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

FilterModal.propTypes = {
  setShowFilterModal: PropTypes.func,
};

export default FilterModal;
