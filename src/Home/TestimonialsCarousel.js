import React, { useState } from 'react';
import './TestimonialsCarousel.css'; // Este será o arquivo de estilo dedicado ao carrossel

const testimonials = [
  { name: "João Cardoso", opinion: "A melhor decisão que fiz pela minha saúde foi me inscrever aqui. Ótimos treinadores e ambiente!" },
  { name: "Lívia Barros", opinion: "Adoro a variedade de equipamentos e as aulas de grupo. É perfeito para manter a motivação em alta!" },
  { name: "Carlos Martins", opinion: "Excelente academia! Ambiente amigável e ótimos programas de treinamento personalizados." }
];

function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const previousSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonials-carousel">
      <h2>O que nossos clientes dizem</h2>
      <div className="testimonial">
        <p>"{testimonials[activeIndex].opinion}"</p>
        <p className="testimonial-author">- {testimonials[activeIndex].name}</p>
      </div>
      <div className="carousel-controls">
        <button onClick={previousSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
