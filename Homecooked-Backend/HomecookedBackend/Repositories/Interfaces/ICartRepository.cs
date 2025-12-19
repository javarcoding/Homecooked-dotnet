using HomecookedBackend.Models;

namespace HomecookedBackend.Repositories.Interfaces
{
    public interface ICartRepository
    {
        Task<Cart> GetOrCreateCartAsync(int customerId);
        Task SaveChangesAsync();
    }
}
