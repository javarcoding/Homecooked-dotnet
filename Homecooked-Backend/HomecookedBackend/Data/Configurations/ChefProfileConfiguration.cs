using HomecookedBackend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace HomecookedBackend.Data.Configurations
{
    public class ChefProfileConfiguration : IEntityTypeConfiguration<ChefProfile>
    {
        public void Configure(EntityTypeBuilder<ChefProfile> builder)
        {
            builder.HasOne(cp => cp.User)
                   .WithOne(u => u.ChefProfile)
                   .HasForeignKey<ChefProfile>(cp => cp.UserId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
