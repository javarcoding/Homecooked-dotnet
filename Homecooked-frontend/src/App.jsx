import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/public/About";
import Contact from "./pages/public/Contact";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

import CustomerHome from "./pages/customer/CustomerHome";
import ChefDashboard from "./pages/chef/ChefDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";
import BrowseMeals from "./pages/customer/BrowseMeals";



function App() {
  console.log("API URL:", import.meta.env.VITE_API_BASE_URL);

  return (
    <Router>
      <Routes>


        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Role-based dashboards */}
        <Route path="/customer/dashboard" element={<CustomerHome />} />
        <Route path="/chef/dashboard" element={<ChefDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />
        <Route path="/meals" element={<BrowseMeals />} />



      </Routes>
    </Router>
  );
}

export default App;
