import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/inicio/inicio';
import Sobre from './pages/sobre/sobre';
import Contato from './pages/contato/contato';
import Servicos from './pages/servicos/servicos';
import Cabegalho from './pages/cabecalho/cabegalho'





const App = () => {
  return (
    <Router>
      <Cabegalho/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/cabegalho" element={<Cabegalho />} />
      </Routes>
    </Router>
  );
};


export default App;
