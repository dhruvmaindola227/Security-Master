using Microsoft.AspNetCore.Mvc;
using prj_backend.Model;
using Microsoft.EntityFrameworkCore;

namespace Prj.Controllers;

[ApiController]
[Route("getequity")]
public class EquityController : ControllerBase
{
    
    private readonly SecMas_DC9Context _DBContext;    

    public EquityController(SecMas_DC9Context dbContext)
    {
        this._DBContext = dbContext;
    }

    [HttpGet(Name = "Getall")]
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


    [HttpGet("GetEquityColumns")]
    public IActionResult GetEquityColumns()
    {
      var equity = typeof(Equity).GetProperties().Select(p => p.Name).ToArray();
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
      }
       this._DBContext.Equities.Add(_equity);
       this._DBContext.SaveChanges();
      
      return Ok(true);
    }

    [HttpPut("UpdateEquity/{securityId}")]
     public IActionResult UpdateBond([FromRoute] int securityId , [FromBody] Equity equityModel)
    {
        if(securityId != equityModel.SecurityId){
            return Ok(false);
        }
        _DBContext.Entry(equityModel).State = EntityState.Modified; //means we are trying to update the state of a particular 
        try{
            _DBContext.SaveChanges();
        }catch(DbUpdateConcurrencyException){
            throw;
        }
        return Ok(true);
    }


     [HttpGet("e-sec-summary")]
    public IActionResult GetSecSumm()
    {
        var equity = this._DBContext.ESecSumms;
        return Ok( equity);
    }

      [HttpGet("e-sec-identifier")]
    public IActionResult GetSecIdt()
    {
        var equity = this._DBContext.ESecIdens;
        return Ok( equity);
    }

       [HttpGet("e-sec-details")]
    public IActionResult GetSecDetl()
    {
        var equity = this._DBContext.ESecDetls;
        return Ok( equity);
    }


       [HttpGet("e-risk")]
    public IActionResult GetSecRisk()
    {
        var equity = this._DBContext.ERisks;
        return Ok( equity);
    }



       [HttpGet("e-reg-details")]
    public IActionResult GetSecRegDetl()
    {
        var equity = this._DBContext.ERegDetls;
        return Ok( equity);
    }


       [HttpGet("e-ref-data")]
    public IActionResult GetSecRefDatum()
    {
        var equity = this._DBContext.ERefrData;
        return Ok( equity);
    }


     [HttpGet("e-price-details")]
    public IActionResult GetSecPric()
    {
        var equity = this._DBContext.EPricDetls;
        return Ok(equity);
    }
    

         [HttpGet("e-div-history")]
    public IActionResult GetSecDivHis()
    {
        var equity = this._DBContext.EDiviHists;
        return Ok( equity);
    }


}


