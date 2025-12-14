using HomecookedBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace HomecookedBackend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // DbSets will be added later
        // public DbSet<User> Users { get; set; }

        public DbSet<User> Users { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<User>()
                .Property(u => u.Role)
                .HasConversion<string>();
        }

    }
}
