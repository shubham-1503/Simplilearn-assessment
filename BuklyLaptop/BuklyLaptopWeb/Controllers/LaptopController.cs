using BuklyLaptopWeb.Data;
using BuklyLaptopWeb.Models;
using Microsoft.AspNetCore.Mvc;

namespace BuklyLaptopWeb.Controllers
{
    public class LaptopController : Controller
    {
        private readonly ApplicationDbContext _db;
        public LaptopController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            IEnumerable<Laptop> objLaptopList = _db.Laptops;
            return View(objLaptopList);
        }

        //invoked when clicked on add to cart btn : put the data into Cart Table

        //GET
        //public IActionResult Create()
        //{
        //    return View();
        //}
    }
}
