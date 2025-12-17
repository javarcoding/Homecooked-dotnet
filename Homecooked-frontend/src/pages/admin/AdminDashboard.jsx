import Navbar from "../../components/Navbar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AdminDashboard() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // 🔐 Not logged in → login page
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 🔐 Logged in but not ADMIN → home
  if (user?.role !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          🛠️ Admin Dashboard
        </h2>
        <p>Welcome, {user.fullName}</p>
      </div>
    </>
  );
}
