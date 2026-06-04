import React, { useState, useEffect } from "react";
import Navbaar from "./component/navbaar/Navbaar";
import Hero from "./component/hero/Hero";
import Education from "./component/education/Education";
import Skill from "./component/skill/skill";
import Project from "./component/projects/Project";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/Footer";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbaar />
      <Hero />      {/* Hero ka apna CSS already hai */}
      <Education /> {/* Education ka apna CSS already hai */}
      <Skill />     {/* Skill - main set kar dunga class */}
      <Project />   {/* Project - main set kar dunga class */}
      <Contact />   {/* Contact - main set kar dunga class */}
      <Footer />
    </div>
  );
};

export default App;