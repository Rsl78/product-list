import PropTypes from "prop-types";
import { CategoryContext } from "../context";
// import { useContext } from "react";
import { useProduct } from "../hooks";

const CategoryDataProvider = ({children}) => {
    const {categoryData} = useProduct(true);
    return (
        <CategoryContext.Provider value={{categoryData}}>
            {children}
        </CategoryContext.Provider>
    );
};

CategoryDataProvider.propTypes = {
    children: PropTypes.node,
}


export default CategoryDataProvider;