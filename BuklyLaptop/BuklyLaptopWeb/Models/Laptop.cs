using System.ComponentModel.DataAnnotations;

namespace BuklyLaptopWeb.Models
{
    public class Laptop
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public string Details { get; set; }

        public string Image { get; set; }
        [Required]
        public int Cost { get; set; }
    }
}
