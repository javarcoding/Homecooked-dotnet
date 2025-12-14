using HomecookedBackend.Models;

namespace HomecookedBackend.Repositories
{
    public interface IUserRepository
    {
        Task<bool> EmailExistsAsync(string email);
        Task<User> CreateUserAsync(User user);

        Task<User?> GetByEmailAsync(string email);
    }
}
