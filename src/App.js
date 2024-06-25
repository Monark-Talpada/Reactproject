import React, { useState } from 'react';
import './App.css';
import Card from './Card'; 

const App = () => {
  const [cards, setCards] = useState([]);

  const handleImageUpload = (file) => {
    console.log('Uploaded file:', file);
    setCards([...cards, { file, imageUrl: URL.createObjectURL(file) }]);
  };

  return (
    <div className="App">
      <h1>Create Multiple Cards</h1>
      <div className='card-container'>
      {cards.map((cardData, index) => (
        <Card key={index} onImageUpload={handleImageUpload} />
      ))}
      </div>
      <div className='button'>
        <button onClick={() => setCards([...cards, {}])}>Add Card</button>
      </div>
      
    </div>
  );
};

export default App;
