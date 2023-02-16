using Microsoft.AspNetCore.Mvc;
using Prj.Model;

namespace Prj.Controllers;

[ApiController]
[Route("getequities")]
public class EquityController : ControllerBase
{
    
    private readonly SecMas_DC9Context _DBContext;    

    public EquityController(SecMas_DC9Context dbContext)
    {
        this._DBContext = dbContext;
    }

    [HttpGet(Name = "GetEquities")]
    public IActionResult GetAllEquities()
    {
      var equities = this._DBContext.Equities.ToList();
      return Ok(equities);
    }
}

