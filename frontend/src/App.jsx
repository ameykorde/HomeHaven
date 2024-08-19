import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from './components/NavBar/NavBar';
import FurniturePage from './pages/FurniturePage'; // Ensure these are correctly imported
import AppliancesPage from './pages/AppliancesPage'; // Ensure these are correctly imported
import Home from './pages/Home';
import Footer from '../src/components/Footer/Footer'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
       <NavBar/>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<Home/>} />
        
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/appliances" element={<AppliancesPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
