import React from 'react';
import { Link } from "react-router-dom";

function SILKLAND() {

    return (
      <div className="SILKLAND">
            <img className="floral" src="./floralWhiteBlack0.webp" alt="floral"/>
            <Link to="/Shop"><button className="btn">shop now</button></Link>
      </div>
    );
}

export default SILKLAND;