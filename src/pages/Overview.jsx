import React from 'react';

const Overview = () => {
  return (
    <div>
      <h2>Welcome to my technical space</h2>
      <p>I'm a passionate full-stack developer with expertise in modern web technologies and sustainability.</p>

      <div className="stats">
        <div className="stat-box">
          <h3>4+</h3>
          <p>Major Projects</p>
        </div>
        <div className="stat-box">
          <h3>10+</h3>
          <p>Technologies</p>
        </div>
        <div className="stat-box">
          <h3>2+</h3>
          <p>Years Experience</p>
        </div>
      </div>

      <div className="core-tech">
        <h4>Core Technologies</h4>
        <div className="tech-tags">
          <span>React</span>
          <span>Node.js</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;