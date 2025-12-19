namespace HomecookedBackend.DTOs.Meal
{
    public class AddMealDto
    {
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public decimal Price { get; set; }

        public int CategoryId { get; set; }
        public bool IsAvailable { get; set; } = true;
    }
}
