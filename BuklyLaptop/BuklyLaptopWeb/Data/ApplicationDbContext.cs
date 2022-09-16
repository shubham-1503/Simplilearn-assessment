using BuklyLaptopWeb.Models;
using Microsoft.EntityFrameworkCore;

namespace BuklyLaptopWeb.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<Laptop> Laptops { get; set; }
        public DbSet<User> Users { get; set; }
        
        public DbSet<Cart> Carts { get; set; }
    }
}
