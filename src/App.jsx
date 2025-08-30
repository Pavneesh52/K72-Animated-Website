import React from 'react';
import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents';
import Projects from './pages/Projects';

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App