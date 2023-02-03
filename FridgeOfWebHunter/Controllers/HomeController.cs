using BLL.DTO;
using BLL.Services;
using BLL.Services.IdentityServices;
using Microsoft.AspNetCore.Mvc;

namespace FridgeOfWebHunter.Controllers
{
    public class HomeController : Controller
    {
        
        public async Task<string> Index([FromServices]CategoryService service)
        {
            await service.AddAsync(new CategoryDto {CategoryName="Beer" });
            return Request.Host.Host+":"+Request.Host.Port;
        }
    }
}
