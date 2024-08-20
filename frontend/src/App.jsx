import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/Navbar/Navbar";
import HeroCarousel from './components/HeroCarosel/HeroCarousel';
import CategoryCards from "./components/CategoryCards/CategoryCards";
import FurniturePage from './pages/FurniturePage'; // Ensure these are correctly imported
import AppliancesPage from './pages/AppliancesPage'; // Ensure these are correctly imported
import ProductDescriptionPage from './pages/ProductDescription/ProductDescription';
import CartPage from './pages/CartPage/CartPage';
import AddressSelectPage from './pages/AddressSelectPage/AddressSelectPage';
import OrderSummary from './pages/OrderSummary/OrderSummary';
import AdminPage from './pages/AdminPage/AdminPage';
import ProductsPage from './pages/AdminPage/ProductPage';
import UsersPage from './pages/AdminPage/UserPage';
function App() {
  return (
    <Router>
      <NavBar />
      {/* <HeroCarousel /> */}
      <Routes>
        <Route path="/" element={<CategoryCards />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/appliances" element={<AppliancesPage />} />
        <Route path="/product/:id" element={<ProductDescriptionPage />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/address" element={<AddressSelectPage/>} />
        <Route path="/summary" element={<OrderSummary/>} />
        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<ProductsPage />} /> {/* Default route */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="users" element={<UsersPage />} />
        </Route>
      </Routes>
    </Router>
  ); 
}

export default App;
