using HomecookedBackend.DTOs.Meal;
using HomecookedBackend.Models;
using HomecookedBackend.Repositories.Interfaces;
using HomecookedBackend.Repositories.Implementations;

namespace HomecookedBackend.Repositories.Implementations
{
    public class MealService : IMealService
    {
        private readonly IMealRepository _mealRepository;
        private readonly IUserRepository _userRepository;

        public MealService(
            IMealRepository mealRepository,
            IUserRepository userRepository)
        {
            _mealRepository = mealRepository;
            _userRepository = userRepository;
        }

        public async Task AddMealAsync(AddMealDto dto, Guid chefId)
        {
            var chef = await _userRepository.GetByIdAsync(chefId)
                       ?? throw new Exception("Chef not found");

            var meal = new Meal
            {
                Name = dto.Name,
                Description = dto.Description,
                Price = dto.Price,
                IsAvailable = dto.IsAvailable,

                CategoryId = dto.CategoryId,

                ChefId = chefId,
                Chef = chef
            };

            await _mealRepository.AddMealAsync(meal);
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
                CategoryName = m.Category != null ? m.Category.Name : "Uncategorized"
            }).ToList();
        }
    }
}
