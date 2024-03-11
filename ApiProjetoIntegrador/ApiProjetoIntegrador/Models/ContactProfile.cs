using AutoMapper;

namespace ApiProjetoIntegrador.Models
{
    public class ContactProfile : Profile
    {
        public ContactProfile()
        {
            CreateMap<ContactDTO, Contact>();
        }
    }
}
