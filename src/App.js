// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import CompletedTasks from './pages/CompletedTasks';  

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/tasks/completed" element={<CompletedTasks />} />  
      </Routes>
    </Router>
  );
}

export default App;
