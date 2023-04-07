import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Adm from './pages/Adm/Adm';
import Home from './pages/Home';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route path="/adm" element={<Adm/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
