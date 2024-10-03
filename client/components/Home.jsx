import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to My Portfolio</h2>
      <p>This is where I showcase my projects and skills.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </div>
  );
}

export default Home;
