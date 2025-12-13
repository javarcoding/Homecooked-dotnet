using Microsoft.AspNetCore.Mvc;
using HomecookedBackend.Data;

namespace HomecookedBackend.Controllers
{
    [ApiController]
    [Route("api/test")]
    public class TestController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TestController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("db")]
        public IActionResult TestDb()
        {
            return Ok("Database connection configured successfully");
        }
    }
}
