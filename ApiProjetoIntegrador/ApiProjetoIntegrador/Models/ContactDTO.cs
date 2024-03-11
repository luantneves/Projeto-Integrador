using System.ComponentModel.DataAnnotations;

namespace ApiProjetoIntegrador.Models
{
    public class ContactDTO
    {
        [Required]
        public required string Name { get; set; }

        [Required]
        public required string Email { get; set; }

        [Required]
        public required string PhoneNumber { get; set; }

        [Required]
        public required string Cep { get; set; }

        [Required]
        public required string Comments { get; set; }

        [Required]
        public required string MaterialType { get; set; }

        public string? Photo { get; set; }
    }
}
