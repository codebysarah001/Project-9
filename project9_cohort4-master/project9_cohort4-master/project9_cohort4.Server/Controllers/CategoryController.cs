using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using project9_cohort4.Server.Models;

namespace project9_cohort4.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly MyDbContext _context;

        public CategoryController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetCategory()
        {
            return Ok(_context.Categories.ToList());
        }

    }
}
