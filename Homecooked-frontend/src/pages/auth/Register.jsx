import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, error, registrationSuccess } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: 1, // CUSTOMER by default
  });

  // ✅ FIXED: Convert role to number
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "role" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Optional: verify payload once
    console.log("REGISTER PAYLOAD:", formData);

    dispatch(register(formData));
  };

  useEffect(() => {
    if (registrationSuccess) {
      navigate("/login");
    }
  }, [registrationSuccess, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">
          Register
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-3">
            {typeof error === "string" ? error : "Registration failed"}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <label htmlFor="fullName" className="sr-only">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Full Name"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Email */}
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Password */}
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Role */}
          <label htmlFor="role" className="block text-sm font-medium">
            Register As
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value={1}>Customer</option>
            <option value={2}>Chef</option>
            <option value={4}>Delivery</option>
          </select>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-500 text-white py-2 rounded"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
