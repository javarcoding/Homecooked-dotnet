using HomecookedBackend.DTOs.Meal;

namespace HomecookedBackend.Repositories.Interfaces
{
    public interface IMealService
    {
        Task<List<FeaturedMealDto>> GetFeaturedMealsAsync();

        Task<List<MealBrowseDto>> BrowseMealsAsync(Guid? chefId, int? categoryId);

    }
}
