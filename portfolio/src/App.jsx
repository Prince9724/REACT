import React, { useState, useEffect } from "react";
import Navbaar from "./component/navbaar/Navbaar";
import Hero from "./component/hero/Hero";
import Education from "./component/education/Education";
import Skill from "./component/skill/Skill";
import Project from "./component/projects/Project";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/Footer";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader">
          <div className="spinner"></div>
          <p>Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app" data-theme={theme}>
      <Navbaar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <Education />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;