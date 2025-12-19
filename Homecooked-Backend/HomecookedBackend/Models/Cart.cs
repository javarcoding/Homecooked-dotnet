namespace HomecookedBackend.Models
{
    public class Cart
    {
        public int Id { get; set; }

        public int CustomerId { get; set; }
        public User? Customer { get; set; }

        public ICollection<CartItem> Items { get; set; } = new List<CartItem>();

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
