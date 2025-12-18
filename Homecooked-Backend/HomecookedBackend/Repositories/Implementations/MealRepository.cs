using HomecookedBackend.Data;
using HomecookedBackend.Models;
using HomecookedBackend.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HomecookedBackend.Repositories.Implementations
{
    public class MealRepository : IMealRepository
    {
        private readonly ApplicationDbContext _context;

        public MealRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Meal>> GetFeaturedMealsAsync()
        {
            return await _context.Meals
                .Include(m => m.Chef)
                .ThenInclude(c => c.ChefProfile)
                .Where(m => m.IsFeatured && m.IsAvailable)
                .OrderByDescending(m => m.CreatedAt)
                .ToListAsync();
        }

        public async Task<List<Meal>> BrowseMealsAsync(Guid? chefId, int? categoryId)
        {
            var query = _context.Meals
                .Include(m => m.Chef)
                .Include(m => m.Category)
                .Where(m => m.IsAvailable);

            if (chefId.HasValue)
                query = query.Where(m => m.ChefId == chefId.Value);

            if (categoryId.HasValue)
                query = query.Where(m => m.CategoryId == categoryId.Value);

            return await query.ToListAsync();
        }



    }
}
