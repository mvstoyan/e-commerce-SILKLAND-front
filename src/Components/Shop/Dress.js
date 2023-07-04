import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Redux/cartSlice";
import Slide from "./Slide";

const Dress = ({ dress }) => {
  const { name, description, price } = dress; // Destructure the dress object to extract the properties
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store

  const [showMore, setShowMore] = useState(false); // Define state for showMore flag using useState hook
  // Toggle the showMore flag when the button is clicked
  const toggleDescription = () => {
    setShowMore(!showMore);
  };
  // Dispatch an action to add the dress to the cart
  const addToCart = () => {
    dispatch(addItemToCart({ dress }));
  };

  return (
    <div className="cards">
      <Slide dress={dress} /> {/* Render the Slide component passing the dress object as a prop */}
      <h2>{name}</h2> {/* Display the dress name */}
      <div className="price">
        <p>$ {price}</p> {/* Display the dress price */}
        <button className="link bag" onClick={addToCart}> {/* Button to add the dress to the cart */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </button>
      </div>
      <div className="text">
        <p className="showText"> {/* Display the dress description, either full or truncated based on showMore flag */}
          {showMore ? description : description.substring(0, 20)}
        </p>
        <button className="showMore" onClick={toggleDescription}> {/* Button to toggle the description visibility */}
          {showMore ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Dress;
