import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function DeliveryDashboard() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // 🔐 Not logged in → login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 🔐 Logged in but not DELIVERY → home
  if (user?.role !== "DELIVERY") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          🚚 Delivery Dashboard
        </h2>
        <p>Welcome, {user.fullName}</p>
      </div>
    </>
  );
}
