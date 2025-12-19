import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import { browseMeals } from "../../store/slices/mealSlice";
import MealCard from "../../components/meals/MealCard";

export default function CustomerHome() {
  const dispatch = useDispatch();
  const { featuredMeals, isLoading } = useSelector(state => state.meals);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(browseMeals({}));
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">
          Welcome, {user.fullName} 👋
        </h2>

        {isLoading && <p>Loading meals...</p>}

        <div className="grid grid-cols-3 gap-6 mt-6">
          {featuredMeals.map(meal => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </>
  );
}
