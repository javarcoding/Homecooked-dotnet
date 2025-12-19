using HomecookedBackend.DTOs.Category;
using HomecookedBackend.Models;
using HomecookedBackend.Repositories.Interfaces;

namespace HomecookedBackend.Repositories.Implementations
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<List<CategoryDto>> GetAllAsync()
        {
            var categories = await _categoryRepository.GetAllAsync();

            return categories.Select(c => new CategoryDto
            {
                Id = c.Id,
                Name = c.Name
            }).ToList();
        }

        public async Task CreateAsync(CreateCategoryDto dto)
        {
            var existing = await _categoryRepository.GetByNameAsync(dto.Name);
            if (existing != null)
                throw new Exception("Category already exists");

            var category = new Category
            {
                Name = dto.Name
            };

            await _categoryRepository.AddAsync(category);
        }
    }
}
