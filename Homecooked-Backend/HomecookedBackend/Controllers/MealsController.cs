using HomecookedBackend.DTOs.Meal;
using HomecookedBackend.Repositories.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace HomecookedBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MealsController : ControllerBase
    {
        private readonly IMealService _mealService;

        public MealsController(IMealService mealService)
        {
            _mealService = mealService;
        }

        [Authorize(Roles = "CHEF")]
        [HttpPost]
        public async Task<IActionResult> AddMeal(AddMealDto dto)
        {
            var chefId = Guid.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
            await _mealService.AddMealAsync(dto, chefId);
            return Ok(new { message = "Meal added successfully" });
        }


        [HttpGet("featured")]
        public async Task<IActionResult> GetFeaturedMeals()
        {
            var meals = await _mealService.GetFeaturedMealsAsync();
            return Ok(meals);
        }

        [HttpGet]
        public async Task<IActionResult> BrowseMeals(
            [FromQuery] Guid? chefId,
            [FromQuery] int? categoryId)
        {
            var meals = await _mealService.BrowseMealsAsync(chefId, categoryId);
            return Ok(meals);
        }


    }
}
