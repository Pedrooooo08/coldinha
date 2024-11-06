import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/COLD.png';
import './cabecalho.scss';

const Cabecalho = () => { 
  const [menuOpen, setMenuOpen] = useState(false);  // Estado para controlar a abertura/fechamento do menu
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Alterna entre abrir e fechar o menu
  };

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Cold Inventory Technology</h1>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/Servicos" className="nav-button">Serviços</Link></li>
          <li><Link to="/Contato" className="nav-button">Contato</Link></li>
          <li><Link to="/Feedback" className="nav-button">Feedback</Link></li>
          <li><Link to="/Sobre" className="nav-button">Sobre nós</Link></li>
        </ul>
      </nav>
      <div className="header-buttons">
        <button className="btn-black">Fale Conosco</button>
        <button className="btn-black">Solicitar Demo</button>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Cabecalho;
