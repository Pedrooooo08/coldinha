import React from "react";
import "../feed/feed.scss";

function FeedbackCard({ name, image, feedback }) {
  return (
    <div className="feedback-card">
      <img src={image} alt={name} className="feedback-image" />
      <h3>{name}</h3>
      <p>{feedback}</p>
    </div>
  );
}

function Feedbacks() {
  const feedbackData = [
    {
      name: "Laura",
      image: "path/to/laura.jpg",
      feedback:
        "O suporte oferecido foi muito profissional e resolutivo. Fiquei impressionado com a capacidade da equipe de identificar e corrigir o problema rapidamente. Continuarei recomendando seus serviços.",
    },
    {
      name: "Cintia",
      image: "path/to/cintia.jpg",
      feedback:
        "Gostaria de elogiar a rapidez na resposta e a clareza nas explicações durante a manutenção do meu equipamento. A comunicação foi excelente e o serviço superou minhas expectativas.",
    },
    {
      name: "Diogo",
      image: "path/to/diogo.jpg",
      feedback:
        "Agradeço pelo excelente atendimento técnico. A equipe foi muito eficiente em resolver meu problema e ofereceu soluções que melhoraram o desempenho do meu sistema.",
    },
  ];

  return (
    <section id="feedbacks" className="feedbacks-section">
      <h2 className="feedbacks-title">Feedbacks</h2>
      <div className="feedbacks-container">
        {feedbackData.map((feedback, index) => (
          <FeedbackCard key={index} {...feedback} />
        ))}
      </div>
    </section>
  );
}

export default Feedbacks;