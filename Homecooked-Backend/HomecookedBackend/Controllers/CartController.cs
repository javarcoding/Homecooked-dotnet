using HomecookedBackend.DTOs.Cart;
using HomecookedBackend.Repositories.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HomecookedBackend.Controllers
{
    [ApiController]
    [Route("api/cart")]
    [Authorize(Roles = "Customer")]
    public class CartController : ControllerBase
    {
        private readonly ICartService _cartService;

        public CartController(ICartService cartService)
        {
            _cartService = cartService;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddToCart(AddToCartDto dto)
        {
            int customerId = int.Parse(User.FindFirst("id")!.Value);
            await _cartService.AddToCartAsync(customerId, dto);
            return Ok(new { message = "Item added to cart" });
        }

        [HttpGet]
        public async Task<IActionResult> GetCart()
        {
            int customerId = int.Parse(User.FindFirst("id")!.Value);
            return Ok(await _cartService.GetCartAsync(customerId));
        }
    }
}
