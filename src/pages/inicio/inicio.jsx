import React from 'react';
import './inicio.scss';
import img from '../image/Design sem nome (2).png';


const HomePage = () => { 
  return (


    <div className="home-page">
     
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
