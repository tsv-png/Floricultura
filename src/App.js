import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Adm from './pages/Adm/Adm';
import Home from './pages/Home';
import Cadastroadm from './pages/Cadastroadm';
import Redefinicao from './pages/Redefinicao';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route path="/adm" element={<Adm/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/cadastroadm' element={<Cadastroadm/>} />
        <Route path='/redefinicao' element={<Redefinicao/>} />
      </Routes>
    </Router>
  );
}

export default App;
