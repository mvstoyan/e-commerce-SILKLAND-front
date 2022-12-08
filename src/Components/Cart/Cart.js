import { useSelector } from "react-redux";
import { getCartItems, getTotals } from "../../Redux/cartSlice";
import CartItem from "./CartItem";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";

const Cart = () => {
const cart = useSelector((state) => state.cart);
const cartItems = useSelector(getCartItems)
const dispatch = useDispatch();
const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    dispatch(getTotals());
      }, [cart, dispatch]);

  return (<div className="cart">
    <h4>Your Cart</h4>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your cart is currently empty</p>
        </div>
          ) : (<div>
         
            
            <div>
          {cartItems.map(cartItem => <CartItem  key={cartItem.id} cartItem={cartItem} />)}
        </div>
        <div className="aboutTotal">
        <h3>Item(s): {cart.cartTotalQuantity}</h3>
            <h3>Total: $ {cart.cartTotalAmount}</h3>
            <div>
            <button className="btnEtsy">
            <a href="https://www.etsy.com/shop/SILKLANDstore?ref=shopinfo_shopname_favoriters" target="_blank" className="footerLink" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#fa772f" d="M23.181,3,7,3.04a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H9.013a3.005,3.005,0,0,1,3.013,3V38.007a3.005,3.005,0,0,1-3.013,3H7a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h33.43a2,2,0,0,0,1.985-1.694l1.569-10.142A1,1,0,0,0,43,32.013H40.954a1,1,0,0,0-.98.782l-1.135,5.08A4.013,4.013,0,0,1,34.917,41H22.07a3.005,3.005,0,0,1-3.013-3V26.019h8.035a4.006,4.006,0,0,1,4.017,4h0a1,1,0,0,0,1,1h1a1,1,0,0,0,1-1V17.028a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1v1a4.006,4.006,0,0,1-4.017,4H19.057V10.035a3.005,3.005,0,0,1,3.013-3H34.122a4.008,4.008,0,0,1,4.018,4v3a1,1,0,0,0,1,1h1.085a1,1,0,0,0,1-.916l.837-9.992a1,1,0,0,0-1-1.082Z"/></svg>
            </a></button>
            <button className="btnZelly" onClick={() => setShowMore(!showMore)}><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><linearGradient id="xLWmQKH2zLcbE8kYFOauIa" x1="23.909" x2="24.119" y1="41.596" y2=".937" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9c55d4"/><stop offset=".002" stop-color="#9c55d4"/><stop offset=".003" stop-color="#9c55d4"/><stop offset=".337" stop-color="#9751d2"/><stop offset=".738" stop-color="#8847cb"/><stop offset=".848" stop-color="#8343c8"/><stop offset=".89" stop-color="#8042c3"/><stop offset=".938" stop-color="#773db6"/><stop offset=".989" stop-color="#68369f"/><stop offset="1" stop-color="#643499"/></linearGradient><path fill="url(#xLWmQKH2zLcbE8kYFOauIa)" d="M35,42H13c-3.866,0-7-3.134-7-7V13c0-3.866,3.134-7,7-7h22c3.866,0,7,3.134,7,7v22 C42,38.866,38.866,42,35,42z"/><path fill="#fff" d="M17.5,18.5h14c0.552,0,1-0.448,1-1V15c0-0.552-0.448-1-1-1h-14c-0.552,0-1,0.448-1,1v2.5	C16.5,18.052,16.948,18.5,17.5,18.5z"/><path fill="#fff" d="M17,34.5h14.5c0.552,0,1-0.448,1-1V31c0-0.552-0.448-1-1-1H17c-0.552,0-1,0.448-1,1v2.5	C16,34.052,16.448,34.5,17,34.5z"/><path fill="#fff" d="M22.25,11v6c0,0.276,0.224,0.5,0.5,0.5h3.5c0.276,0,0.5-0.224,0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5	h-3.5C22.474,10.5,22.25,10.724,22.25,11z"/><path fill="#fff" d="M22.25,32v6c0,0.276,0.224,0.5,0.5,0.5h3.5c0.276,0,0.5-0.224,0.5-0.5v-6c0-0.276-0.224-0.5-0.5-0.5	h-3.5C22.474,31.5,22.25,31.724,22.25,32z"/><path fill="#fff" d="M16.578,30.938H22l10.294-12.839c0.178-0.222,0.019-0.552-0.266-0.552H26.5L16.275,30.298	C16.065,30.553,16.247,30.938,16.578,30.938z"/></svg>
            </button>
            {showMore ? <div> <p>SilkLand@gmail.com</p> <p>Please specify your email in the 'Silk' field</p>
            <a href="https://www.zellepay.com/" target="_blank" rel="noreferrer">How to pay with Zelle</a></div> : ""}
            </div>
            </div> 
        </div>
        )}
    </div>)
}

export default Cart;

