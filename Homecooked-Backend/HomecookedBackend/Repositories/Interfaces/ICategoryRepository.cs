using HomecookedBackend.Models;

namespace HomecookedBackend.Repositories.Interfaces
{
    public interface ICategoryRepository
    {
        Task<List<Category>> GetAllAsync();
        Task<Category?> GetByNameAsync(string name);
        Task AddAsync(Category category);
    }
}
