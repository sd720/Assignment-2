const CategoryFilter = ({ onSelectCategory }) => {
    return (
      <div className="category-filter">
        <button onClick={() => onSelectCategory('All')}>All Cakes</button>
        <button onClick={() => onSelectCategory('Chocolate')}>Chocolate</button>
        <button onClick={() => onSelectCategory('Fruit')}>Fruit</button>
        <button onClick={() => onSelectCategory('Custom')}>Custom</button>
      </div>
    );
  };
  