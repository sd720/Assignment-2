import React, { useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import CakeCard from '../components/CakeCard';

const CakeCategories = ({ cakes }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredCakes = cakes.filter(cake => selectedCategory === 'All' || cake.category === selectedCategory);

  return (
    <div>
      <h2>Our Cakes</h2>
      <CategoryFilter onSelectCategory={setSelectedCategory} />
      <div className="cake-cards">
        {filteredCakes.map(cake => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default CakeCategories;
