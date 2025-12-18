import axiosInstance from "../api/axiosInstance";

const mealService = {
  getFeaturedMeals: async () => {
    const response = await axiosInstance.get("/meals/featured");
    return response.data;
  },
};

export default mealService;
