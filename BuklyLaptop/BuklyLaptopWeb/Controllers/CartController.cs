using BuklyLaptopWeb.Data;
using BuklyLaptopWeb.Models;
using Microsoft.AspNetCore.Mvc;

namespace BuklyLaptopWeb.Controllers
{
    public class CartController : Controller
    {
        private readonly ApplicationDbContext _db;
        public CartController(ApplicationDbContext db)
        {
            _db = db;
        }
        public IActionResult Index()
        {
            IEnumerable<Cart> objCartList = _db.Carts;
            return View(objCartList);
        }

        //GET
        public IActionResult Purchase(int? Id)
        {
            var objCart = _db.Carts.Find(Id);
            return View(objCart);

        }

        //Post
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Purchase(Cart obj)
        {
            _db.Carts.Update(obj);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

    }
}
