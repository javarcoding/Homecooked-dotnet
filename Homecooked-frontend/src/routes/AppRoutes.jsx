import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import CustomerDashboard from "../pages/customer/CustomerHome";
import ChefDashboard from "../pages/chef/ChefDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import DeliveryDashboard from "../pages/delivery/DeliveryDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      <Route path="/chef/dashboard" element={<ChefDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />
    </Routes>
  );
};

export default AppRoutes;


