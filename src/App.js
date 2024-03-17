import React from 'react';
import './App.css';
import Home from './Home/Home';
import Cadastro from './Cadastro/Cadastro';
import Login from './Login/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} /> 
          <Route path="/Login" element={<Login />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
