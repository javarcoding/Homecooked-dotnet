using HomecookedBackend.DTOs.Meal;
using HomecookedBackend.Repositories.Interfaces;

namespace HomecookedBackend.Repositories.Implementations
{
    public class MealService : IMealService
    {
        private readonly IMealRepository _mealRepository;

        public MealService(IMealRepository mealRepository)
        {
            _mealRepository = mealRepository;
        }

        public async Task<List<FeaturedMealDto>> GetFeaturedMealsAsync()
        {
            var meals = await _mealRepository.GetFeaturedMealsAsync();

            return meals.Select(m => new FeaturedMealDto
            {
                Id = m.Id,
                Name = m.Name,
                Description = m.Description,
                Price = m.Price,
                ChefName = m.Chef.FullName,
                KitchenName = m.Chef.ChefProfile?.KitchenName
            }).ToList();
        }

        public async Task<List<MealBrowseDto>> BrowseMealsAsync(Guid? chefId, int? categoryId)
        {
            var meals = await _mealRepository.BrowseMealsAsync(chefId, categoryId);

            return meals.Select(m => new MealBrowseDto
            {
                Id = m.Id,
                Name = m.Name,
                Price = m.Price,
                ChefName = m.Chef.FullName,
                CategoryName = m.Category?.Name ?? "Uncategorized"
            }).ToList();
        }


    }
}
