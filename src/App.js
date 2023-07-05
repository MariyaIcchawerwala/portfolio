import logo from './logo.svg';
import './App.css';
import './index.css';
import React from "react"
import About from './routes/About/About';

import Home from './routes/Home';
import Project from './routes/Projects/Project';
import {Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/project" element={<Project/>}/>
       <Route path="/about" element={<About/>}/> 
     </Routes>
    </>
  );
}

export default App;
