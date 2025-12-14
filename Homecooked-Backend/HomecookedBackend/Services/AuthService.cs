using HomecookedBackend.DTOs.Auth;
using HomecookedBackend.Models;
using HomecookedBackend.Repositories;
using HomecookedBackend.Helpers;

namespace HomecookedBackend.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IJwtService _jwtService;

        public AuthService(
            IUserRepository userRepository,
            IJwtService jwtService)
        {
            _userRepository = userRepository;
            _jwtService = jwtService;
        }

        public async Task<RegisterResponseDto> RegisterAsync(RegisterRequestDto request)
        {
            if (await _userRepository.EmailExistsAsync(request.Email))
                throw new Exception("Email already registered");

            var user = new User
            {
                FullName = request.FullName,
                Email = request.Email,
                Role = request.Role,
                PasswordHash = PasswordHasher.HashPassword(request.Password),
                IsActive = true,
                IsVerified = false
            };

            var createdUser = await _userRepository.CreateUserAsync(user);

            return new RegisterResponseDto
            {
                UserId = createdUser.Id,
                Message = "User registered successfully"
            };
        }

        public async Task<LoginResponseDto> LoginAsync(LoginRequestDto request)
        {
            var user = await _userRepository.GetByEmailAsync(request.Email);

            if (user == null)
                throw new Exception("Invalid email or password");

            if (!PasswordHasher.VerifyPassword(request.Password, user.PasswordHash))
                throw new Exception("Invalid email or password");

            var token = _jwtService.GenerateToken(user);

            return new LoginResponseDto
            {
                Token = token,
                UserId = user.Id,
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role.ToString()
            };
        }
    }
}
