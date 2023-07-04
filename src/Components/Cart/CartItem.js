import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  decreaseCart,
  increaseCart,
} from "../../Redux/cartSlice.js"; // removeItemFromCart, decreaseCart, and increaseCart are action creators defined in cartSlice.js that are used to update the cart state in the Redux store.
import axios from "axios"; // axios is an HTTP client used to make API requests.

const CartItem = ({ cartItem, index }) => {
  //Define the CartItem component and receive cartItem and index as props.
  const [product, setProduct] = useState(null); // Initialize a state variable product using the useState hook. Initially, it is set to null.
  const dispatch = useDispatch(); // Get the dispatch function from the Redux store using the useDispatch hook.

  useEffect(() => { // Function to fetch the product data
    const fetchProduct = async () => {
      try { // Make an API request to fetch the product using the dressId
        const response = await axios.get( // Store the product data in the state
          `https://e-commerce-silkland.onrender.com/api/v1/products/${cartItem.dressId}`
        );
        setProduct(response.data.product);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct(); // Call the fetchProduct function when cartItem.dressId changes
  }, [cartItem.dressId]);

  if (!product) { // If the product data is not yet available, render a loading message
    return <p>Loading product...</p>;
  }

  return ( // Render the cart item
    <div>
      <div className="cartItem"> 
        <img className="cartImage" src={product.image[0]} alt="dress" /> {/* Display the product image */}
        <div className="aboutItem">
          <h4>{product.name}</h4>  {/* Display the product name */}
          <p>Price: ${product.price}</p> {/* Display the product price */}
          <div>  {/* Button to decrease the quantity in the cart */}
            <button
              className="quantity"
              onClick={() => {
                dispatch(decreaseCart({ cartItemID: cartItem.id }));
              }}
            >
              -
            </button>
            <span>{cartItem.quantity}</span> {/* Display the quantity in the cart */}
            {/* Button to increase the quantity in the cart */}
            <button
              className="quantity"
              onClick={() => {
                dispatch(increaseCart({ cartItemID: cartItem.id }));
              }}
            >
              +
            </button>
          </div>  {/* Button to remove the item from the cart */}
          <span
            onClick={() =>
              dispatch(removeItemFromCart({ cartItemID: cartItem.id }))
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
