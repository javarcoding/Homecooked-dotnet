import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/authService";
import {
  getToken,
  getUser,
  setAuthData,
  clearAuthData,
} from "../../utils/tokenUtils";

/* ===================== LOGIN ===================== */
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await authService.login(credentials);

      console.log("LOGIN RESPONSE:", data);

      // 🔥 Normalize backend response
      const user = {
        id: data.userId,
        fullName: data.fullName,
        email: data.email,
        role: data.role, // "CUSTOMER", "CHEF", etc.
      };

      const payload = {
        token: data.token,
        user,
      };

      // 🔥 Store correctly
      setAuthData(payload.token, payload.user);

      // 🔥 MUST return payload
      return payload;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);


/* ===================== REGISTER ===================== */
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      const data = error.response?.data;

      if (typeof data === "string") {
        return rejectWithValue(data);
      }

      if (data?.errors) {
        const firstKey = Object.keys(data.errors)[0];
        return rejectWithValue(data.errors[firstKey][0]);
      }

      return rejectWithValue(data?.title || "Registration failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getUser(),
    token: getToken(),
    isAuthenticated: !!getToken(),
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      clearAuthData();
    },
  },
  extraReducers: (builder) => {
    builder
      /* -------- LOGIN -------- */
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      /* -------- REGISTER -------- */
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;


