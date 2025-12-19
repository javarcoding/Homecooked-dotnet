namespace HomecookedBackend.Models
{
    public class CartItem
    {
        public int Id { get; set; }

        public int CartId { get; set; }
        public Cart? Cart { get; set; }

        public int MealId { get; set; }
        public Meal? Meal { get; set; }

        public int Quantity { get; set; }
    }
}
