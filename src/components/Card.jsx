import React from "react";
import "../styles/card.css";

const Card = (props) => {
  return (
    <div className='card'>
      <div className='icon-container'>{props.icon}</div>
      <p className='type'>{props.type}</p>
      <p className='desc'>{props.description}</p>
      <button className='btn-readmore'>Read More</button>
    </div>
  );
};

export default Card;
