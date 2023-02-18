using Microsoft.AspNetCore.Mvc;
using prj_backend.Model;

namespace webAPI.Controllers;

[ApiController]
[Route("getBond")]
public class BondController : ControllerBase
{

    private readonly SecMas_DC9Context _DBContext;
    public BondController(SecMas_DC9Context _DBContext)
    {
        this._DBContext = _DBContext;
    }

    [HttpPost("CreateBond")]
    public IActionResult CreateBond([FromBody] Bond _bond)
    {
        var bond = this._DBContext.Bonds.Where(x => x.SecurityId == _bond.SecurityId).FirstOrDefault();
        if (bond != null)
        {
            return Ok(false);
        }
        else
        {
            this._DBContext.Bonds.Add(_bond);
            this._DBContext.SaveChanges();
        }
        return Ok(true);
    }

    [HttpGet(Name = "getBond")]
    public IActionResult GetAllBonds()
    {
        var bond = this._DBContext.Bonds.ToList();
        return Ok(bond);
    }

    [HttpGet("GetBondById/{securityId}")]
    public IActionResult GetBondById(int securityId)
    {
        var bond = this._DBContext.Bonds.Where(x => x.SecurityId == securityId).FirstOrDefault();
        if (bond != null)
        {
            return Ok(bond);
        }
        return Ok(false);
    }

    [HttpDelete("DeleteBond/{securityId}")]
    public IActionResult DeleteBond(int securityId)
    {
        var bond = this._DBContext.Bonds.Where(x => x.SecurityId == securityId).FirstOrDefault();
        if (bond != null)
        {
            this._DBContext.Bonds.Remove(bond);
            this._DBContext.SaveChanges();
            return Ok(true);
        }
        return Ok(false);
    }




    [Http]


}

