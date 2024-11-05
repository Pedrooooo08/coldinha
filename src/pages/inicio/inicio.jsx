import React from 'react';
import { Link } from 'react-router-dom';
import './inicio.scss';
import img from '../image/Design sem nome (2).png';
import logo from '../image/COLD.png';

const HomePage = () => { 
  return (
    <div className="home-page">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Cold Inventory Technology</h1>
        <nav>
          <ul>
          <Link to="/Servicos" className="geral">Servicos</Link>
            <Link to="/Contato" className="geral">Contato</Link>
            <Link to="/Feedback" className="geral">Feedback</Link>
            <Link to="/Sobre" className="geral">Sobre nós</Link>
          </ul>
        </nav>
      </header>
      <div className="content">
        <div className="text-section">
          <h2>Bem-vindo à Cold Inventory Technology</h2>
          <p>A sua solução para gestão de inventário frio. Com tecnologia de ponta, oferecemos soluções eficientes e inovadoras para atender suas necessidades.</p>
        </div>
        <div className="image-section">
          <img src={img} alt="" />
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Cold Inventory Technology. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
