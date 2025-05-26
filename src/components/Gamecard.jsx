import React from "react";

const Gamecard = ({ image, title, onClick }) => (
  <div className="game-card" onClick={onClick}>
    <img src={image} alt={title} />
    <p>{title}</p>
  </div>
);

export default Gamecard;