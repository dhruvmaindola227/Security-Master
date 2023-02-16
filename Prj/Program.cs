using Prj.Model;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
const string corsPolicyName = "ApiCORS";
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicyName, policy =>
    {
        policy.WithOrigins("http://localhost:5202");
        policy.WithOrigins("http://localhost:3000");
    });
});

builder.Services.AddDbContext<SecMas_DC9Context>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("constring"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(corsPolicyName); // 👈 This should be above the UseStaticFiles();

app.UseStaticFiles(); // 👈 Below the UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
