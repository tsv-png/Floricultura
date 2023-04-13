import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Adm from "./pages/Adm/Adm";
import Home from "./pages/Home";
import Cadastroadm from "./pages/Cadastroadm";
import Redefinicao from "./pages/Redefinicao";
import Enviado from "./pages/Enviado";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/" element={<Home />} />
        <Route path="/cadastroadm" element={<Cadastroadm />} />
        <Route path="/redefinicao" element={<Redefinicao />} />
        <Route path="/enviado" element={<Enviado />} />
      </Routes>
    </Router>
  );
}

export default App;
