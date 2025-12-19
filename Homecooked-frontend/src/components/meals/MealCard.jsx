import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

const MealCard = ({ meal }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ mealId: meal.id, quantity: 1 }));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-lg font-semibold">{meal.name}</h3>

      <p className="text-sm text-gray-600 mt-1">
        {meal.description}
      </p>

      <div className="mt-3 flex justify-between items-center">
        <span className="text-orange-600 font-bold">
          ₹{meal.price}
        </span>

        <button
          onClick={handleAddToCart}
          className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
        >
          Add
        </button>
      </div>

      <div className="mt-2 text-xs text-gray-500">
        👨‍🍳 {meal.chefName}
      </div>
    </div>
  );
};

export default MealCard;
