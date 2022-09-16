using System.ComponentModel.DataAnnotations;

namespace BuklyLaptopWeb.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public int Phone { get; set; }

    }
}
