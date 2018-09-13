import React from "react";
import "./style.css";
import Image from "../../assets/flat.jpg";

class Result extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-image">
          <img src={Image} alt="" className="home-image-img" />
        </div>
        <div className="home-price">
          <p>$400 per night</p>
        </div>
      </div>
    );
  }
}

export default Result;
