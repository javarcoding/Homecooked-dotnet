using HomecookedBackend.DTOs.Cart;

namespace HomecookedBackend.Repositories.Interfaces
{
    public interface ICartService
    {
        Task AddToCartAsync(int customerId, AddToCartDto dto);
        Task<List<CartItemDto>> GetCartAsync(int customerId);
    }
}
