import React, { useState } from 'react';
import './App.css';

const Card = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card">
      {image ? (
        <img src={image} alt="Uploaded" className="card-image" />
      ) : (
        <div className="placeholder-text">Upload an image</div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="image-upload"
      />
    </div>
  );
};

export default Card;