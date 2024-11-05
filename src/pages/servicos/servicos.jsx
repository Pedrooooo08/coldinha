import React from "react";
import '../servicos/servicos.scss'



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
      price: "R$130/month",
      description:
        "Pacote de serviços que se concentra na proteção de dados e na segurança da informação, essencial para mitigar riscos e garantir conformidade com regulamentações.",
      image: "path/to/image1.jpg",
    },
    {
      title: "BasicSite (Plano Básico)",
      price: "R$39/month",
      description:
        "O Plano BasicSite oferece uma solução acessível e prática para empresas e empreendedores estabelecerem uma presença online sólida e profissional.",
      image: "path/to/image2.jpg",
    },
    {
      title: "Suporte TechSync",
      price: "R$90/month",
      description:
        "Suporte técnico que se sincroniza perfeitamente com as necessidades e demandas tecnológicas dos clientes, oferecendo soluções personalizadas e rápidas.",
      image: "path/to/image3.jpg",
    },
    {
      title: "IT Essentials",
      price: "R$50/month",
      description:
        "Plano que aborda as necessidades básicas e essenciais de TI de uma empresa, incluindo suporte técnico básico e monitoramento.",
      image: "path/to/image4.jpg",
    },
  ];

  return (
    <section id="servicos" className="services-section">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
}

export default ServiceSection;

