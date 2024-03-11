using ApiProjetoIntegrador.Contexts;
using ApiProjetoIntegrador.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;

namespace ApiProjetoIntegrador.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ContactContext _contactContext;
        private readonly IMapper _mapper;

        public ContactController(ContactContext context, IMapper mapper)
        {
            _contactContext = context;
            _mapper = mapper;
        }

        [HttpPost(Name = "CreateNewContact")]
        public IActionResult Index(ContactDTO contactDto)
        {
            if (contactDto == null)
                return BadRequest();
            try
            {
               var contact = _mapper.Map<ContactDTO, Contact>(contactDto);

                _contactContext.Contacts.Add(contact);
                _contactContext.SaveChanges();

                return CreatedAtAction(nameof(Index), contact);
            }
            catch (Exception err)
            {
                string errorMessage = $"Erro ao Dcriar novo contato. {err}";
                Console.WriteLine(errorMessage);
                return Problem(errorMessage, null, 500);
            }
        }
    }
}
