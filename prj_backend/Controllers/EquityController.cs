using Microsoft.AspNetCore.Mvc;
using prj_backend.Model;

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


    [HttpGet("GetEquityById/{securityId}")]
    public IActionResult GetEquityById(int securityId)
    {
      var equity = this._DBContext.Equities.Where(x => x.SecurityId == securityId).FirstOrDefault();
      if(equity != null){
        return Ok(equity);
      }
      return Ok(false);
    }



    [HttpDelete("DeleteEquity/{securityId}")]
    public IActionResult DeleteEquity(int securityId)
    {
      var equity = this._DBContext.Equities.Where(x => x.SecurityId == securityId).FirstOrDefault();
      if(equity != null){
        this._DBContext.Remove(equity);
        this._DBContext.SaveChanges();
        return Ok(true);
      }
      return Ok(false);
      
    }


  [HttpPost("CreateEquity")]
    public IActionResult CreateEquity([FromBody] Equity _equity)
    {
      var equity = this._DBContext.Equities.Where(x => x.SecurityId == _equity.SecurityId).FirstOrDefault();
      if(equity != null){
        return Ok(false);
      }else{
        this._DBContext.Equities.Add(_equity);
        this._DBContext.SaveChanges();
      }
      return Ok(true);
    }


}


