import React from 'react';
import { Link } from 'react-router-dom';
import './contato.scss';
import logo from '../image/COLD.png';
import facebookIcon from '../image/face.png'; 
import instagramIcon from '../image/Instagram_icon.png'; 
import twitterIcon from '../image/x.png'; 

const ContactPage = () => { 
  return (
    <div className="contact-page">
      <header className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        <h1>Contato</h1>
      </header>
      <div className="content">
        <div className="social-section">
          <h2>Conecte-se Conosco</h2>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-card">
              <img src={facebookIcon} alt="Facebook" />
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-card">
              <img src={instagramIcon} alt="Instagram" />
              <span>Instagram</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-card">
              <img src={twitterIcon} alt="X (Twitter)" />
              <span>X (Twitter)</span>
            </a>
          </div>
        </div>
        <div className="contact-form-section">
          <h2>Entre em Contato Conosco</h2>
          <form className="contact-form">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" placeholder="Seu nome" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Seu email" required />

            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" placeholder="Sua mensagem" required></textarea>

            <button type="submit" className="submit-button">Enviar</button>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Cold Inventory Technology. Todos os direitos reservados.</p>
        <Link to="/" className="back-button">Voltar para a Página Inicial</Link>
      </footer>
    </div>
  );
};

export default ContactPage;
