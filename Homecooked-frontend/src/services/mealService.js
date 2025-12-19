import axiosInstance from "../api/axiosInstance";

const browseMeals = (filters) =>
  axiosInstance.get("/meals", { params: filters });

const getFeaturedMeals = () =>
  axiosInstance.get("/meals/featured");

export default {
  browseMeals,
  getFeaturedMeals
};
