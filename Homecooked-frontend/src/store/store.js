import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import mealReducer from "./slices/mealSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    meals: mealReducer,
  },
});
