using HomecookedBackend.DTOs.Category;

namespace HomecookedBackend.Repositories.Interfaces
{
    public interface ICategoryService
    {
        Task<List<CategoryDto>> GetAllAsync();
        Task CreateAsync(CreateCategoryDto dto);
    }
}
