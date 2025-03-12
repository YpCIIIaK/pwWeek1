import React from "react";
import "./card.scss";

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
