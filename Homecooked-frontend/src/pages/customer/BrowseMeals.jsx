import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { browseMeals } from "../../store/slices/mealSlice";

const BrowseMeals = () => {
  const dispatch = useDispatch();
  const { featuredMeals } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(browseMeals({}));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Browse Meals</h2>
      {featuredMeals.map(meal => (
        <div key={meal.id}>{meal.name} - ₹{meal.price}</div>
      ))}
    </div>
  );
};

export default BrowseMeals;
