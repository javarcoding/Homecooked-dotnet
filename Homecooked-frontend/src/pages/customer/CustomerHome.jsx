import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function CustomerDashboard() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // 🔐 Not logged in → login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 🔐 Logged in but not CUSTOMER → home
  if (user?.role !== "CUSTOMER") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          🛒 Customer Dashboard
        </h2>
        <p>Welcome, {user.fullName}</p>
      </div>
    </>
  );
}
