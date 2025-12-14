import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../services/authService";

// LOGIN THUNK
export const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            return await loginUser(data);
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);

// REGISTER THUNK
export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      return await registerUser(userData);
    } catch (error) {
      // ✅ Extract meaningful message
      const data = error.response?.data;

      if (typeof data === "string") {
        return rejectWithValue(data);
      }

      if (data?.errors) {
        // ASP.NET validation errors
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
        user: null,
        token: localStorage.getItem("token") || null,
        isAuthenticated: !!localStorage.getItem("token"),
        isLoading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder

            // LOGIN
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.token;
                state.user = action.payload.user;
                state.isAuthenticated = true;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // REGISTER
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.registrationSuccess = true;
            })

            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
