import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import mealService from "../../services/mealService";

/* ==========================================
   ASYNC THUNKS
========================================== */

/**
 * Fetch Featured Meals (Public API)
 * GET /api/meals/featured
 */
export const fetchFeaturedMeals = createAsyncThunk(
  "meals/fetchFeaturedMeals",
  async (_, thunkAPI) => {
    try {
      const data = await mealService.getFeaturedMeals();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to fetch featured meals"
      );
    }
  }
);


export const browseMeals = createAsyncThunk(
  "meals/browse",
  async (filters, { rejectWithValue }) => {
    try {
      return await mealService.browseMeals(filters);
    } catch {
      return rejectWithValue("Failed to load meals");
    }
  }
);


/* ==========================================
   INITIAL STATE
========================================== */

const initialState = {
  featuredMeals: [],      // Public featured meals
  isLoading: false,       // Global loading state
  error: null,            // Error message
};

/* ==========================================
   MEAL SLICE
========================================== */

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    clearMealError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // Fetch Featured Meals
      .addCase(fetchFeaturedMeals.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedMeals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featuredMeals = action.payload;
      })
      .addCase(fetchFeaturedMeals.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

/* ==========================================
   EXPORTS
========================================== */

export const { clearMealError } = mealSlice.actions;

export default mealSlice.reducer;
