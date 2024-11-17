import React, { useState } from 'react';

const CakeDetailPage = ({ cake }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(cake.availableSizes[0]);

  const handleAddToCart = () => {
    // Add selected cake, size, and quantity to the cart
  };

  return (
    <div className="cake-detail">
      <img src={cake.image} alt={cake.name} />
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <h3>Price: ${cake.price}</h3>

      <div>
        <label>Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          {cake.availableSizes.map(sizeOption => (
            <option key={sizeOption} value={sizeOption}>
              {sizeOption}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
      </div>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CakeDetailPage;
