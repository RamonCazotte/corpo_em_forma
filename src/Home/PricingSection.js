// PricingSection.js
import React from 'react';
import './PricingSection.css';

function PricingSection() {
    const plans = [
        {
            title: 'Básico',
            description: 'Perfeito para iniciantes no mundo fitness, este plano te introduz gradativamente com treinos personalizados, orientações nutricionais simples e uma comunidade de apoio. Escolha este plano para uma introdução suave em sua jornada fitness.',
            price: 'R$99 por mês'
        },
        {
            title: 'Performance',
            description: 'Ideal para quem já tem um histórico fitness, este plano eleva a sua rotina com treinos personalizados, consultoria nutricional avançada e monitoramento de progresso. Escolha este plano para levar seu condicionamento físico ao próximo nível.',
            price: 'R$139 por mês'
        },
        {
            title: 'Elite',
            description: 'Desenvolvido para entusiastas do fitness de alto nível e atletas, este plano completo otimiza seu desempenho com um programa de treinamento intenso, estratégias nutricionais altamente personalizadas e monitoramento preciso do seu progresso.',
            price: 'R$159 por mês'
        }
    ];

    return (
        <div className="pricing-section">
            <h2 className="pricing-title">Investimentos Mínimos, Resultados Máximos</h2>
            <div className="plans-container">
                {plans.map((plan, index) => (
                    <div className="plan" key={index}>
                        <h3>{plan.title}</h3>
                        <p>{plan.description}</p>
                        <span className="price">{plan.price}</span>
                        <button className="plan-button">Get Started</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PricingSection;
