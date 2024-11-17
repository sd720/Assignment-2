import React from 'react';
import CakeCard from '../components/CakeCard';
import { Link } from 'react-router-dom';

const Home = ({ featuredCakes }) => {
  return (
    <div>
      <header className="hero-section">
        <h1>Welcome to Our Cake Shop!</h1>
        <p>Your favorite cakes, freshly baked with love!</p>
      </header>

      <section className="featured-cakes">
        <h2>Featured Cakes</h2>
        <div className="cake-cards">
          {featuredCakes.map(cake => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
      </section>

      <Link to="/cake-categories" className="view-more-btn">
        Browse All Cakes
      </Link>
    </div>
  );
};

export default Home;
