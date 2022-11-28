
import './App.css';
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Cart from './Components/Cart/Cart';
import Shop from './Components/Shop/Shop';
import SILKLAND from './Components/SILKLAND/SILKLAND';
import About from './Components/SILKLAND/About';
import ContactForm from './Components/SILKLAND/ContactForm';

function App() {
  const cart = useSelector((state) => state.cart);
    return (
      <div>
        <Router>
          <nav className="navbar">
            <Link className="link" to="/">SILKLAND</Link>
            <Link className="link" to="/Shop">Shop</Link>
            <Link className="link" to="/About">About</Link>
            <Link className="link bag" to="/Cart"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg><span>{cart.cartTotalQuantity}</span></Link>
          {/*<Link className="link" to="/Wish"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg></Link>
          <Link className="link" to="/Account"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
            </svg></Link>*/}
          </nav>
            <hr />
        <Routes>
          <Route path="/" element={<SILKLAND />} />
          <Route path='/Shop' element={<Shop/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          {/*<Route path="/Wish" element={<Wish />} />
          <Route path="/Account" element={<Account />} />*/}
        </Routes>
            <hr />
      <div className="footer">
        <div className="footer-container">
          <div className="footerLinks">
            <Link to="/" className="footerLink"> home </Link>
            <Link to="/Shop" className="footerLink"> shop </Link>
            <Link to="/About" className="footerLink"> about </Link>
          </div>
          <div className="footerLinks">
            <a href="https://www.instagram.com/" target="_blank" className="footerLink" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
            </a>
            <a href="https://www.etsy.com/shop/SILKLANDstore?ref=shopinfo_shopname_favoriters" target="_blank" className="footerLink" rel="noreferrer">
              <svg width="16px" height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.417 3.26c0-0.432 0.047-0.693 0.786-0.693h9.953c1.734 0 2.698 1.479 3.391 4.255l0.557 2.224h1.693c0.307-6.307 0.573-9.047 0.573-9.047s-4.26 0.479-6.786 0.479h-12.729l-6.818-0.219v1.828l2.297 0.432c1.615 0.323 2 0.661 2.135 2.141 0 0 0.146 4.365 0.146 11.521 0 7.182-0.12 11.479-0.12 11.479 0 1.302-0.521 1.781-2.12 2.099l-2.297 0.443v1.797l6.839-0.219h11.401c2.583 0 8.521 0.219 8.521 0.219 0.141-1.563 1-8.641 1.141-9.417h-1.599l-1.714 3.88c-1.339 3.036-3.302 3.255-5.479 3.255h-6.542c-2.172 0-3.219-0.849-3.219-2.729v-9.922c0 0 4.823 0 6.385 0.125 1.214 0.089 1.948 0.438 2.344 2.13l0.521 2.26h1.88l-0.12-5.703 0.255-5.74h-1.854l-0.599 2.521c-0.375 1.656-0.641 1.958-2.339 2.135-2.219 0.224-6.422 0.182-6.422 0.182v-11.714h-0.063z"/>
              </svg>
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" className="footerLink" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
            </a>
          </div>
          <div className="footerLinks"> 
            <button  className="footerLink"> Subscribe to our mailimg list to stay up to date with our promotions and news</button>
              <ContactForm />
          </div>
        </div >
          <hr />
            <p className="App" >© 2022 SilkLand </p>
      </div>
        </Router>
        <div>
          <div style={{ marginTop: "150vh" }} />
          <ScrollToTop smooth />
        </div>     
      </div>
    )
}

export default App;

