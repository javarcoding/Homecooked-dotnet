using HomecookedBackend.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;

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
