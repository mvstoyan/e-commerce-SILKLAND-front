import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../../Redux/dressesSlice';

const Filter = () => {
  const selectedCategory = useSelector(getSelectedCategory);
  const dispatch = useDispatch();

  const handleFilter = (category) => {
    dispatch(filterCategory(category));
  };

  return (
    <div className="filters">
      {['floral', 'abstract', 'all'].map((category) => (
        <div key={category}>
          <button
            onClick={() => handleFilter(category)}
            className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}
          >
            {category}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Filter;
