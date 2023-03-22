import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Adm from './pages/Adm/Adm';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route path="/adm" element={<Adm/>} />
      </Routes>
    </Router>
  );
}

export default App;
