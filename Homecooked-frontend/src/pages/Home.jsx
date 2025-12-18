import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedMeals } from "../store/slices/mealSlice";
import MealCard from "../components/meals/MealCard";

const Home = () => {
  const dispatch = useDispatch();

  const { featuredMeals, loading, error } = useSelector(
    (state) => state.meals
  );

  useEffect(() => {
    dispatch(fetchFeaturedMeals());
  }, [dispatch]);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">
        🍱 Featured Home-Cooked Meals
      </h1>

      {loading && (
        <p className="text-gray-500">Loading meals...</p>
      )}

      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {!loading && featuredMeals.length === 0 && (
        <p className="text-gray-500">
          No featured meals available.
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featuredMeals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Home;
