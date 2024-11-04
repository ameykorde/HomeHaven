import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/NavBar/Navbar";
import HeroCarousel from './components/HeroCarosel/HeroCarousel';
import CategoryCards from "./components/CategoryCards/CategoryCards";
import FurniturePage from './pages/FurniturePage'; 
import AppliancesPage from './pages/AppliancesPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'; 
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ProductDescriptionPage from './pages/ProductDescription/ProductDescription'
import CartPage from './pages/CartPage/CartPage';
import AddressSelectPage from './pages/AddressSelectPage/AddressSelectPage'
import OrderSummary from './pages/OrderSummary/OrderSummary';
import AdminPage from './pages/AdminPage/AdminPage'
import ProductsPage from './pages/AdminPage/ProductPage'
import UsersPage from './pages/AdminPage/UserPage'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<Home/>} />
      <Route path="ContactUs" element={<ContactUs/>} />
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
      <Footer/>
    </Router>
  ); 
}

export default App;
