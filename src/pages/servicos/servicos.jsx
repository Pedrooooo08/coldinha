import React from "react";
import './servicos.scss';
import d2 from '../image/foto1.png';
import d3 from '../image/foto2.png';
import d4 from'../image/foto3.png';
import d5 from'../image/foto4.png';
import Cabegalho from '../cabecalho/cabegalho'


function ServiceCard({ title, price, description, image }) {
  return (

    <div className="service-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <button>Assinar</button>
    </div>

  );
}

function ServiceSection() {
  const services = [
    {
      title: "Pacote ByteShield",
      price: "R$130/mês",
      description:
        "Pacote de serviços focado na proteção de dados e segurança da informação.",
      image: d2, 
    },
    {
      title: "BasicSite (Plano Básico)",
      price: "R$39/mês",
      description:
        "Plano acessível para criar uma presença online sólida.",
      image: d3, 
    },
    {
      title: "Suporte TechSync",
      price: "R$90/mês",
      description:
        "Suporte técnico personalizado e rápido.",
      image: d4, 
    },
    {
      title: "IT Essentials",
      price: "R$50/mês",
      description:
        "Plano com suporte técnico básico e monitoramento.",
      image: d5, 
    },
  ];

  return (
    <div>
      <section id="servicos" className="services-section">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>

      <footer className="footer">
        <p>© 2024 Cold Inventory & Technology. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default ServiceSection;
