import React from "react"
import Navbaar from "./component/navbaar/Navbaar"
import Hero from "./component/hero/Hero"
import Education from "./component/education/Education"
import Skill from "./component/skill/skill"
import Project from "./component/projects/Project"
import Contact  from "./component/Contact/Contact"
const App = ()=> {
  return <>
  <div>
    <Navbaar />
    <Hero />
    <Education />
    <Skill />
    <Project />
    <Contact />
  </div>
  </>
}
export default App
 