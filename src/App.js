import React from 'react';
import './App.css';
import Home from './Home/Home';
import PlanoPage from './PlanoPage';
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
          <Route path="/planos" element={<PlanoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
