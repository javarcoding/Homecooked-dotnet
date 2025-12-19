import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { items } = useSelector(state => state.cart);

  return (
    <div className="bg-white shadow rounded p-4 w-64 absolute right-4 top-12">
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        items.map(item => (
          <div key={item.mealId} className="flex justify-between mb-2">
            <span>{item.mealName || `Meal ${item.mealId}`}</span>
            <span>Qty: {item.quantity}</span>
          </div>
        ))
      )}
      <Link to="/checkout" className="text-orange-600 mt-2 block">Go to Checkout</Link>
    </div>
  );
};

export default CartDropdown;
