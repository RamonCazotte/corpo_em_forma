import React from 'react';
import './App.css';
import Home from './Home/Home';
import Cadastro from './Cadastro/Cadastro';
import Login from './Login/Login';
import FichaAluno from './Fichas/Fichas';
import ExerciseItem from './Exercicios/ExercicioItem';
import ExerciseList from './Exercicios/ExercicioLista';
 
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
          <Route path="/Fichas" element={<FichaAluno />} />
          <Route path="/Exericios" element={<ExerciseItem/>} />
          <Route path="/Exericios" element={<ExerciseList/>} />
          {/* <Route path="/Fichas/FichaProfessor" element={<FichaProfessor />} />  */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
