using ApiProjetoIntegrador.Models;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql;

namespace ApiProjetoIntegrador.Contexts
{
    public class ContactContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }

        public ContactContext(DbContextOptions opts) : base(opts)
        {

        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseMySql(ServerVersion.AutoDetect(""));

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>(opts =>
            {
                opts.ToTable(nameof(Contact));
                opts.HasKey(p => p.Id);
                opts.Property(p => p.Name);
                opts.Property(p => p.Email);
                opts.Property(p => p.MaterialType);
                opts.Property(p => p.Comments);
                opts.Property(p => p.Cep);
                opts.Property(p => p.PhoneNumber);
                opts.Property(p => p.Photo);
            });                        

            base.OnModelCreating(modelBuilder);
        }
    }
}
