import React from 'react';
import { Link } from "react-router-dom";

function SILKLAND() {

    return (
      <div className="SILKLAND">
            <img className="floral" src="https://drive.google.com/uc?id=1kYLw1tFsn76ieG3V32csf3470vbOaHIX" alt="floral"/>
            <Link to="/Shop"><button className="btn">shop now</button></Link>
      </div>
        /*
      <div className="two">
        <img className="abstarctBlack0" src="./content/image/abstractBlack/abstractBlack0.png" alt="abstractBlack0"/>
      </div>
      <div className="three">
      </div>
      <div className="start">
      <div className="container">
        <video autoPlay muted loop>
          <source src="/content/video/floralWhiteBlack.mp4" type="video/mp4" />
        </video>
        <h1>SilkLand</h1>
      </div>
      </div>*/
    );
}

export default SILKLAND;