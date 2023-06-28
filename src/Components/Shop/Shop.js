import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../Redux/dressesSlice';
import axios from 'axios';
import Filter from './Filter';
import Dress from './Dress';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const selectedCategory = useSelector(getSelectedCategory);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://e-commerce-silkland.onrender.com/api/v1/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="shop">
      <Filter category={selectedCategory} />
      <div className="allCards">
        {products.map((product) => (
          <Dress key={product.id} dress={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;