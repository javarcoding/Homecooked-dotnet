using HomecookedBackend.DTOs.Meal;
using HomecookedBackend.Models;

namespace HomecookedBackend.Repositories.Interfaces
{
    public interface IMealRepository
    {
        Task AddMealAsync(Meal meal);
        Task<List<Meal>> GetFeaturedMealsAsync();

        Task<List<Meal>> BrowseMealsAsync(Guid? chefId, int? categoryId);


    }
}
