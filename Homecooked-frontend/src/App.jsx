import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CustomerDashboard from "./pages/customer/dashboard"
import ChefDashboard from "./pages/chef/dashboard"
import AdminDashboard from "./pages/admin/dashboard"
import DeliveryDashboard from "./pages/delivery/dashboard"
import Home from "./pages/Home"


function App() {

  console.log("API URL:", import.meta.env.VITE_API_BASE_URL);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/customer/dashboard" element={<CustomerDashboard/>} />
        <Route path="/chef/dashboard" element={<ChefDashboard/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/delivery/dashboard" element={<DeliveryDashboard/>} />

      </Routes>
    </Router>
  );
}

export default App
