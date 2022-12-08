import { useState } from 'react';
import data from "./data";


function Slide (props) {
    const [objectDress]=useState(props.dress-1);
    const [index, setIndex] = useState(0);
    const {image}=data[objectDress]
    const backImage = () => {
    setIndex((index => {
        index--;
        if (index < 0) {
            return image.length-1;
            }
                return index;
    }))
}
    const nextImage = () => {
    setIndex((index=>{
        index++;
        if (index>image.length-1){
            index=0
        }
            return index
    }))
}
    return (      
        <div className='slider'>    
                 
            <button className='btnSlider' onClick={backImage}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg></button>
            <div className='cardDress'>
            <img className='sliderDress' src={image[index]} alt="dress"/>
            </div>   
            <button className='btnSlider' onClick={nextImage}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button> 
              
        </div> 
    )
};

export default Slide;

