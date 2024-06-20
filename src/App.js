import React from 'react';
import CardsList from './Components/CardsList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>TheGoodGame Theory</h1>
      <h1>Pokémon List</h1>
      <CardsList />
    </div>
  );
};

export default App;

