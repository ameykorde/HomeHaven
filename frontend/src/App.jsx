import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar/NavBar";
import HeroCarousel from './components/HeroCarosel/HeroCarousel';
import CategoryCards from "./components/CategoryCards/CategoryCards";
import FurniturePage from './pages/FurniturePage'; // Ensure these are correctly imported
import AppliancesPage from './pages/AppliancesPage'; // Ensure these are correctly imported

function App() {
  return (
    <Router>
      <NavBar />
      <HeroCarousel />
      <Routes>
        <Route path="/" element={<CategoryCards />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/appliances" element={<AppliancesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
