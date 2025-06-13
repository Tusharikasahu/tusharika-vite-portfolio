import React, { useState } from "react";

const SplitLayout = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    if (activeTab === "overview") {
      return (
        <>
          <h2>Welcome to my technical space</h2>
          <p>I'm a passionate full-stack developer with expertise in modern web technologies.</p>

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
        </>
      );
    }

    if (activeTab === "projects") {
      return (
        <>
          <h2>Projects</h2>
          <p>Built systems for event management, AI chatbots, data tools.</p>
        </>
      );
    }

    if (activeTab === "skills") {
      return (
        <>
          <h2>Skills</h2>
          <ul className="skill-list">
            <li>React, Node.js, MongoDB</li>
            <li>Python, JavaScript, TypeScript</li>
            <li>Firebase, REST APIs, WebRTC</li>
            <li>SCSS, Tailwind, Framer Motion</li>
          </ul>
        </>
      );
    }

    if (activeTab === "experience") {
      return (
        <>
          <h2>Experience</h2>
          <ul>
            <li>Intern @ Amiti Software – Chatbot Dev</li>
            <li>BEML – Vehicle Assembly & Quality</li>
            <li>Co-founder – BIO-D Packaging Startup</li>
          </ul>
        </>
      );
    }

    if (activeTab === "resume") {
      return (
        <>
          <h2>Resume</h2>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
            View My Resume 📄
          </a>
        </>
      );
    }

    return null;
  };

  return (
    <div className="split-layout">
      {/* Left Section */}
      <div className="left-section">
        {/* Introduction */}
        <div className="intro-content">
          <h1>Hi, I'm Tusharika 👋</h1>
          <p>Full Stack Developer • Sustainability Advocate</p>
        </div>

        {/* What I Love */}
        <div className="what-i-love">
          <h4>What I Love</h4>
          <div className="love-items">
            <div className="love-item">
              <span>🌱</span>
              <p>Clean Code</p>
            </div>
            <div className="love-item">
              <span>🌱</span>
              <p>Sustainability</p>
            </div>
            <div className="love-item">
              <span>💡</span>
              <p>Innovation</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="contact-bubbles">
          <a href="https://github.com/Tusharikasahu"  target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/tusharikasahu/"  target="_blank">LinkedIn</a>
          <a href="mailto:sahutusharika@gmail.com">Email</a>
          <a href="tel:+91-9340434992">Call Me</a>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Navigation Tabs */}
        <nav className="pill-nav">
          <button onClick={() => setActiveTab("overview")} className={activeTab === "overview" ? "active" : ""}>
            Overview
          </button>
          <button onClick={() => setActiveTab("projects")} className={activeTab === "projects" ? "active" : ""}>
            Projects
          </button>
          <button onClick={() => setActiveTab("skills")} className={activeTab === "skills" ? "active" : ""}>
            Skills
          </button>
          <button onClick={() => setActiveTab("experience")} className={activeTab === "experience" ? "active" : ""}>
            Experience
          </button>
          <button onClick={() => setActiveTab("resume")} className={activeTab === "resume" ? "active" : ""}>
            Resume
          </button>
        </nav>

        {/* Content Area */}
        <div className="content">{renderContent()}</div>
      </div>

      {/* Connect with Me Button */}
      <button
        className="connect-button"
        onClick={() => {
          window.open("mailto:sahutusharika@gmail.com");
          window.open("https://www.linkedin.com/in/tusharikasahu/"); 
        }}
      >
        💬 Connect with Me
      </button>
    </div>
  );
};

export default SplitLayout;