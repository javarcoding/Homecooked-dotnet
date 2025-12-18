namespace HomecookedBackend.DTOs.Meal
{
    public class MealBrowseDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public decimal Price { get; set; }
        public required string ChefName { get; set; }
        public required string CategoryName { get; set; }
    }
}
