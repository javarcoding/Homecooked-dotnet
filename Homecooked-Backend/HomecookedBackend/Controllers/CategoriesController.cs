using HomecookedBackend.DTOs.Category;
using HomecookedBackend.Repositories.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HomecookedBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        // 🌍 Public – for frontend dropdown
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _categoryService.GetAllAsync();
            return Ok(categories);
        }

        // 🔐 Optional: restrict to ADMIN / CHEF
        [Authorize(Roles = "CHEF")]
        [HttpPost]
        public async Task<IActionResult> CreateCategory(CreateCategoryDto dto)
        {
            await _categoryService.CreateAsync(dto);
            return Ok(new { message = "Category created successfully" });
        }
    }
}
