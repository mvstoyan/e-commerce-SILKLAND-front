import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../Redux/dressesSlice';
import axios from 'axios';
import Filter from './Filter';
import Dress from './Dress';

const Shop = () => {
  // State variables for products, loading status, and error message
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Get the selected category from the Redux store using useSelector
  const selectedCategory = useSelector(getSelectedCategory);

  useEffect(() => {
    // Fetch products from the API based on the selected category
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://e-commerce-silkland.onrender.com/api/v1/products');
        let filteredProducts = response.data.products;

        // Filter products based on the selected category
        if (selectedCategory !== 'all') {
          filteredProducts = filteredProducts.filter((product) => product.category === selectedCategory);
        }
// Update the products state and set loading to false
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        // Handle errors while fetching products
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  // Display loading message while fetching products
  if (loading) {
    return <p>Loading...</p>;
  }
 // Display error message if there was an error fetching products
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="shop">
      {/* Render the filter component */}
      <Filter />
      <div className="allCards">
        {/* Map over the products and render a Dress component for each product */}
        {products.map((product) => (
          <Dress key={product.id} dress={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;