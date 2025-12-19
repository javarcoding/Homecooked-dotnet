using HomecookedBackend.DTOs.Meal;

namespace HomecookedBackend.Repositories.Interfaces
{
    public interface IMealService
    {
        Task AddMealAsync(AddMealDto dto, Guid chefId);
        Task<List<FeaturedMealDto>> GetFeaturedMealsAsync();
        Task<List<MealBrowseDto>> BrowseMealsAsync(Guid? chefId, int? categoryId);
    }
}
