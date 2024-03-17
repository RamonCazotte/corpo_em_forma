import React, { useState } from 'react';
import './Login.css'; // Ajuste o caminho conforme necessário

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você implementaria a lógica de envio dos dados
    console.log("Login com:", { email, senha });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>

        <label htmlFor="email" className="form-label">Email</label>
        <input 
          type="email" 
          id="email" 
          className="form-input" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
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

        <button type="submit" className="submit-btn">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
