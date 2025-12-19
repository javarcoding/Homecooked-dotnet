import { addToCart } from "../../store/features/cart/cartSlice";

const handleAddToCart = () => {
  dispatch(addToCart({ mealId: mealDetails.id, quantity: 1 }));
};

<button
  onClick={handleAddToCart}
  className="bg-orange-500 text-white px-4 py-2 rounded mt-4 hover:bg-orange-600"
>
  Add to Cart
</button>
