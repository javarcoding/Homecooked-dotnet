namespace HomecookedBackend.DTOs.Cart
{
    public class CartItemDto
    {
        public int MealId { get; set; }
        public string MealName { get; set; } = string.Empty;

        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
