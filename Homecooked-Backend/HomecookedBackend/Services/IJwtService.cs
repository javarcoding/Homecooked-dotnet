using HomecookedBackend.Models;

namespace HomecookedBackend.Services
{
    public interface IJwtService
    {
        string GenerateToken(User user);
    }
}
