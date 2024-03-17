import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro() {
  // Estado para armazenar os valores dos inputs
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para processar os dados do formulário
    console.log('Dados do Cadastro:', { email, nome, senha });
  };

  return (
    <div className="cadastro-container">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2 className="cadastro-title">Cadastro</h2>

        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="nome" className="form-label">Nome</label>
        <input
          type="text"
          id="nome"
          className="form-input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label htmlFor="senha" className="form-label">Senha</label>
        <input
          type="password"
          id="senha"
          className="form-input"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
