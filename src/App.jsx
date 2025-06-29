import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Chatbot from "./components/Chatbot";
function App(){
  return (
    <Router>
      {/* <div style ={{minHeight:'100vh',background:'white'}}></div> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route> 
      </Routes>
      <Chatbot/>
      
    </Router>
  )
}
export default App;