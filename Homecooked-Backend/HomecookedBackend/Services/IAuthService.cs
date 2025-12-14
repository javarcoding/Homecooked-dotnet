using HomecookedBackend.DTOs.Auth;
using System.Threading.Tasks;

namespace HomecookedBackend.Services
{
    public interface IAuthService
    {
        Task<RegisterResponseDto> RegisterAsync(RegisterRequestDto request);

        Task<LoginResponseDto> LoginAsync(LoginRequestDto request);


    }

}
