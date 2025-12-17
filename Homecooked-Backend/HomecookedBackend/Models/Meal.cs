using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HomecookedBackend.Models
{
    public class Meal
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public required string Name { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        [Required]
        [Column(TypeName = "decimal(10,2)")]
        public decimal Price { get; set; }

        public bool IsAvailable { get; set; } = true;

        public bool IsFeatured { get; set; } = false;

        [Required]
        public Guid ChefId { get; set; }   // ✅ FIXED

        [ForeignKey(nameof(ChefId))]
        public required User Chef { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }

}
