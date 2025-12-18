namespace HomecookedBackend.Models
{
    public class Category
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public ICollection<Meal> Meals { get; set; } = new List<Meal>();
    }

}
