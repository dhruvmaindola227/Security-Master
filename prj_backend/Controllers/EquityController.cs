using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using prj_backend.Model;
using Microsoft.EntityFrameworkCore;

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


     [HttpPatch("UpdateEquity/{securityId}")]
    public IActionResult UpdateEquity([FromBody] JsonPatchDocument equityModel ,[FromRoute] int securityId){
        var equity = _DBContext.Equities.Find(securityId);
        equityModel.ApplyTo(equity);
        _DBContext.SaveChanges();
        return Ok(equity);
    }



     [HttpPut("UpdateEquity/{securityId}")]
     public IActionResult UpdateBond([FromRoute] int securityId , [FromBody] Equity equityModel)
    {
        if(securityId != equityModel.SecurityId){
            return BadRequest();
        }
        _DBContext.Entry(equityModel).State = EntityState.Modified; //means we are trying to update the state of a particular 
        try{
            _DBContext.SaveChanges();
        }catch(DbUpdateConcurrencyException){
            throw;
        }
        return Ok(true);
    }


}


