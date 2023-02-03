using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using FridgeOfWebHunter.Areas.Identity.Data;
using BLL.Extensions;
using FridgeOfWebHunter.APIConfiguration;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace FridgeOfWebHunter
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var connectionString = builder.Configuration.GetConnectionString("ApplicationDbContextConnection") ?? throw new InvalidOperationException("Connection string 'ApplicationDbContextConnection' not found.");

            builder.Services.AddApplicationDbContext(connectionStr: connectionString);
            builder.Services.AddApplicationDataTransients();
            builder.Services.ConfigureIdentityOptions();
            builder.Services.AddAuthentication(options =>
            {
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
               .AddJwtBearer(options =>
               {
                   options.RequireHttpsMetadata = false;
                   options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                   {
                       ValidateIssuer = true,
                       ValidIssuer = AuthOptions.ISSUER,
                       ValidateAudience = true,
                       ValidAudience = AuthOptions.AUDIENCE,
                       ValidateLifetime = true,
                       IssuerSigningKey = AuthOptions.GetSymetricKey(),
                       ValidateIssuerSigningKey = true
                   };
               });

            builder.Services.AddDistributedMemoryCache();
            builder.Services.AddSession();

            // Add services to the container.

            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();


            /*app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");*/

            app.MapFallbackToFile("index.html");
                        app.UseAuthentication();;

            app.Run();
        }
    }
}