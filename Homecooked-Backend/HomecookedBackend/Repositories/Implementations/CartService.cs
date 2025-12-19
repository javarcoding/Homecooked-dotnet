using HomecookedBackend.DTOs.Cart;
using HomecookedBackend.Repositories.Interfaces;

namespace HomecookedBackend.Repositories.Implementations
{
    public class CartService : ICartService
    {
        private readonly ICartRepository _cartRepo;

        public CartService(ICartRepository cartRepo)
        {
            _cartRepo = cartRepo;
        }

        public async Task AddToCartAsync(int customerId, AddToCartDto dto)
        {
            var cart = await _cartRepo.GetOrCreateCartAsync(customerId);

            var item = cart.Items.FirstOrDefault(i => i.MealId == dto.MealId);

            if (item != null)
                item.Quantity += dto.Quantity;
            else
                cart.Items.Add(new Models.CartItem
                {
                    MealId = dto.MealId,
                    Quantity = dto.Quantity
                });

            await _cartRepo.SaveChangesAsync();
        }

        public async Task<List<CartItemDto>> GetCartAsync(int customerId)
        {
            var cart = await _cartRepo.GetOrCreateCartAsync(customerId);

            return cart.Items.Select(i => new CartItemDto
            {
                MealId = i.MealId,
                MealName = i.Meal!.Name,
                Price = i.Meal!.Price,
                Quantity = i.Quantity
            }).ToList();
        }
    }
}
