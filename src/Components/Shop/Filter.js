import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../Redux/dressesSlice";

const Filter = () => {
  const selectedCategory = useSelector(getSelectedCategory); // Get the selected category from the Redux store using useSelector
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store

  // Handle the filter button click event and dispatch the filterCategory action
  const handleFilter = (category) => {
    dispatch(filterCategory(category));
  };

  return (
    <div className="filters">
       {/* Map over the categories and render a filter button for each category */}
      {["floral", "abstract", "all"].map((category) => (
        <div key={category}>
          {/* Render the filter button */}
          <button
            onClick={() => handleFilter(category)}
            // Set the class name based on whether the category is selected or not
            className={
              selectedCategory === category
                ? "categoryButtonSelected categoryButton"
                : "categoryButton"
            }
          > {/* Display the category name */}
            {category}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Filter;
