using Microsoft.AspNetCore.Mvc;
using Prj.Model;

namespace Prj.Controllers;

[ApiController]
[Route("getbonds")]
public class BondController : ControllerBase
{
    
    private readonly SecMas_DC9Context _DBContext;    

    public BondController(SecMas_DC9Context dbContext)
    {
        this._DBContext = dbContext;
    }

    [HttpGet(Name = "GetBonds")]
    public IActionResult GetBonds()
    {
      var bonds = this._DBContext.Bonds.ToList();
      return Ok(bonds);
    }
}

