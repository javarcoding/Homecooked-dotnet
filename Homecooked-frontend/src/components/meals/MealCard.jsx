const MealCard = ({ meal }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4">
      <h3 className="text-lg font-semibold">{meal.name}</h3>

      <p className="text-sm text-gray-600 mt-1">
        {meal.description}
      </p>

      <div className="mt-3 flex justify-between items-center">
        <span className="text-orange-600 font-bold">
          ₹{meal.price}
        </span>
      </div>

      <div className="mt-2 text-xs text-gray-500">
        👨‍🍳 {meal.chefName} • {meal.kitchenName}
      </div>
    </div>
  );
};

export default MealCard;
