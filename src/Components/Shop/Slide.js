import React, { useState } from 'react';

const Slide = ({ dress }) => {
  // State variable to track the index of the current image
  const [index, setIndex] = useState(0);
  const { image } = dress;
// Function to go to the previous image
  const backImage = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? image.length - 1 : prevIndex - 1));
  };
// Function to go to the next image
  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex === image.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      {/* Button to go to the previous image */}
      <button className='btnSlider' onClick={() => backImage()}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>
      <div className="cardDress">
        {/* Display the current image */}
        <img className="sliderDress" src={image[index]} alt="dress" />
      </div>
      {/* Button to go to the next image */}
      <button className='btnSlider' onClick={() => nextImage()}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button> 
    </div>
  );
};

export default Slide;