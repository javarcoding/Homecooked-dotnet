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
    }
}
