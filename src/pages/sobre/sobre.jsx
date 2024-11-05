import React from 'react';
import './sobre.scss';

const AboutUs = () => {
    return (
        <div className="sobre-nos">
            <div className="cards-container">
                <div className="card">
                    <h2>Sobre a Cold Inventory & Technology</h2>
                    <p>Descrição sobre a empresa, sua história e seus objetivos no mercado.</p>
                </div>
                <div className="card">
                    <h2>Nosso Compromisso</h2>
                    <p>Nosso compromisso é com a qualidade e a inovação em cada produto que oferecemos.</p>
                </div>
                <div className="card">
                    <h2>O Que Nos Diferencia</h2>
                    <p>Nosso diferencial está na tecnologia avançada e no atendimento ao cliente excepcional.</p>
                </div>
                <div className="card">
                    <h2>Visão Futuro</h2>
                    <p>Visamos ser líderes em tecnologia e inovação, sempre focados na sustentabilidade.</p>
                </div>
            </div>
            <footer className="footer">
                <p>© 2024 Cold Inventory & Technology. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
};

export default AboutUs;
