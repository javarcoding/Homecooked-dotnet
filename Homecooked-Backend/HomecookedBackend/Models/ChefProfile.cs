using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HomecookedBackend.Models
{
    public class ChefProfile
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public Guid UserId { get; set; }   // ✅ MUST MATCH User.Id

        [ForeignKey(nameof(UserId))]
        public User User { get; set; } = null!;

        [MaxLength(200)]
        public string? KitchenName { get; set; }

        [MaxLength(500)]
        public string? Address { get; set; }

        public bool IsVerified { get; set; } = false;

        public decimal Rating { get; set; } = 0;

        public int TotalOrders { get; set; } = 0;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
