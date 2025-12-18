namespace HomecookedBackend.DTOs.Meal
{
    public class FeaturedMealDto
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public decimal Price { get; set; }
        public string? ChefName { get; set; }
        public string? KitchenName { get; set; }
    }
}
