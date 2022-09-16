using System.ComponentModel.DataAnnotations;

namespace BuklyLaptopWeb.Models
{
    public class Cart
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Cost { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
