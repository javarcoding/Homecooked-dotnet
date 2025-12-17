using HomecookedBackend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HomecookedBackend.Data.Configurations
{
    public class MealConfiguration : IEntityTypeConfiguration<Meal>
    {
        public void Configure(EntityTypeBuilder<Meal> builder)
        {
            builder.Property(m => m.Price)
                   .HasColumnType("decimal(10,2)");

            builder.HasOne(m => m.Chef)
                   .WithMany(u => u.Meals)
                   .HasForeignKey(m => m.ChefId)
                   .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
