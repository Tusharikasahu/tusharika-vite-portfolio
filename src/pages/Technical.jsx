import React from 'react';

const Technical = () => {
  return (
    <div className="technical">
      <h2>Projects</h2>
      <ul>
        <li><strong>MOBO</strong>: A mobility app for sustainable transport.</li>
        <li><strong>Barecraft</strong>: Minimalist landing page generator.</li>
        <li><strong>Startathon</strong>: Hackathon management platform.</li>
        <li><strong>Internet Speed Tester</strong>: Web-based speed checker tool.</li>
      </ul>
      <button className="btn-primary" onClick={() => window.location.href="/resume"}>Download Resume</button>
    </div>
  );
};

export default Technical;