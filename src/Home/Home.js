import React, { useState } from 'react';
import TestimonialsCarousel from './TestimonialsCarousel';


import './Home.css';
import PricingSection from './PricingSection';

function Home() {
  return (
    <div className="home">

      <div className="fixed-buttons">
        <button className="btn">Cadastrar</button>
        <button className="btn">Entrar</button>
      </div>


      <div className="banner">
        <h1 className='Boas-vindas'>Bem-vindo à Academia Corpo em Forma</h1>
        <div className="slogan-container"> {/* Envolve o slogan em um novo container */}
          <p className="slogan">Descubra a sua melhor versão. Junte-se a nós e ultrapasse seus limites. Treinos personalizados para o seu potencial, te deixando em forma hoje e muito mais forte no futuro.</p>
        </div>
      </div>

      <div className="sobre-nos">
        <h2>Porque escolher Corpo em Forma?</h2>
        <p>Aqui, o seu bem-estar é prioridade. Oferecemos treinos focados em resultados e te orientamos na alimentação para te conduzir ao seu pico de forma física.</p>
        <div className="beneficios">
          <div className="beneficio">
            <h3>Treinos Personalizados</h3>
            <p>Treine com profissionais de alto nível. Nossos Coaches Especialistas te guiarão na jornada rumo à sua saúde ideal.</p>
          </div>
          <div className="beneficio">
            <h3>Equipamentos Modernos</h3>
            <p>Nossos equipamentos modernos foram projetados para melhorar a sua experiência de treino e impulsionar o seu progresso.</p>
          </div>
          <div className="beneficio">
            <h3>Inspiração e Progresso</h3>
            <p>Você treinará ao lado de pessoas com objetivos semelhantes, que se incentivam e inspiram mutuamente para alcançar suas metas fitness.</p>
          </div>
        </div>
      </div>

      <div className="opinioes-clientes">
        {/* Conteúdo do carrossel de opiniões aqui */}
      </div>
      <div className="opinioes-clientes">
        <TestimonialsCarousel />
        <PricingSection />
      </div>

    </div>
  );
}

export default Home;