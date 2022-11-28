import { useForm, ValidationError } from '@formspree/react';
import React from 'react';
import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);
  const [state, handleSubmit] = useForm("mvolawqr");
    if (state.succeeded) {
      return <p className="footerLink">We have received your message! Thank You!</p>;
    }
      return (
        <div className='faq'>
        <div className="faq-container">
            <div className="faq-summary">

            <button className="faq-item faq-title" onClick={() => setShowMore(!showMore)}>Shipping Information</button>
            {showMore ? <div> <p className='faq-text'>SHIPPING & DELIVERY may take up to 12 business days via UPS or USPS.</p>
            <p className='faq-text'>Business days are Monday through Friday, excluding holidays.</p>
            <p className='faq-text'>Free Delivery is only available for street addresses and P.O. Box shipments.</p>
            <p className='faq-text'>Free Delivery is available for shipments to AK, HI, APO/FPO addresses and U.S.</p>
            <p className='faq-text'>Territories, but please allow up to 30 days for delivery.</p>
            </div> : ""}

            <button className="faq-item faq-title" onClick={() => setShowMore(!showMore)}>Deescription</button>
            {showMore ? <div> <p className='faq-text'>You are looking at silk kimono dress with sakura flowers print.</p>
            <p className='faq-text'>This dress is good for daytime events and night parties.</p> 
            <p className="faq-text">It is easy to moderate using accessories, jewelry, makeup,</p>
            <p className="faq-text">sports shoes or heels. You will be stunning!</p>
            </div> : ""}

            <button className="faq-item faq-title" onClick={() => setShowMore(!showMore)}>Highlights</button>
            {showMore ? <div> <p className="faq-text">Luxury kimono dresses made of 100% natural silk fabrics</p>
                    <p className="faq-text">Handmade</p>
                    <p className="faq-text">DRY CLEAN ONLY*</p>
            </div> : ""}

            <button className="faq-item faq-title" onClick={() => setShowMore(!showMore)}>Need Help?</button>
            {showMore ? <div>
              <form className="App form" onSubmit={handleSubmit} 
          action="https://formspree.io/f/mvolawqr" method="POST">
          <label className="about" htmlFor="email">Your email: </label>
            <input className="inputContact" id="email" type="email"  name="email"/>
              <ValidationError prefix="Email" field="email" errors={state.errors}/>
        <br/>
          <label className="about" htmlFor="message">Your message: </label>
            <textarea className="inputContact" id="message" name="message"/>
              <ValidationError prefix="Message" field="message" errors={state.errors}/>
        <button className="btn" type="submit" disabled={state.submitting}>Send</button>
        </form> 
            </div> : ""}
            </div>
            <a href="/shop"  rel="noreferrer"><button className="btnmore">Shop now</button></a>
        </div>
        </div>
        
  );
}
export default About;