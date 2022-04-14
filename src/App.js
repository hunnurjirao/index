import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css"
import Home from './components/Home';
import Main from './components/Main';
import Navbar from './components/Navbar';



function App() {
  return (
    <div>
      <Navbar />
      {/* <Main /> */}
      <Routes>
        <Route path='/index/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
