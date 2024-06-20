import React from 'react';
import './index.css';

const CardItems = ({ pokemon }) => {
  return (
    <div className="pok-card-item">
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default CardItems;
