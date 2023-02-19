using Microsoft.AspNetCore.Mvc;
using prj_backend.Model;
using Microsoft.EntityFrameworkCore;

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



    [HttpPut("UpdateBond/{securityId}")]
     public IActionResult UpdateBond([FromRoute] int securityId , [FromBody] Bond bondModel)
    {
        if(securityId != bondModel.SecurityId){
            return BadRequest();
        }
        _DBContext.Entry(bondModel).State = EntityState.Modified; //means we are trying to update the state of a particular employee.
        try{
            _DBContext.SaveChanges();
        }catch(DbUpdateConcurrencyException){
            throw;
        }
        return Ok(true);
    }





  [HttpGet("b-sec-summary")]
    public IActionResult GetSecSumm()
    {
        var equity = this._DBContext.BSecSumms.ToList();
        return Ok(equity);
    }

      [HttpGet("b-sec-identifier")]
    public IActionResult GetSecIdt()
    {
        var equity = this._DBContext.BSecIdens.ToList();
        return Ok( equity);
    }

       [HttpGet("b-sec-details")]
    public IActionResult GetSecDetl()
    {
        var equity = this._DBContext.BSecDetls.ToList();
        return Ok( equity);
    }


       [HttpGet("b-risk")]
    public IActionResult GetSecRisk()
    {
        var equity = this._DBContext.BRisks.ToList();
        return Ok( equity);
    }



       [HttpGet("b-reg-details")]
    public IActionResult GetSecRegDetl()
    {
        var equity = this._DBContext.BRegDetls.ToList();
        return Ok( equity);
    }


       [HttpGet("b-ref-data")]
    public IActionResult GetSecRefDatum()
    {
        var equity = this._DBContext.BRefrData.ToList();
        return Ok( equity);
    }


        [HttpGet("b-put-schedule")]
    public IActionResult GetSecPutSch()
    {
        var equity = this._DBContext.BPutSchdls.ToList();
        return Ok(equity);
    }


        [HttpGet("b-prc-anl")]
    public IActionResult GetSecPrcAnl()
    {
        var equity = this._DBContext.BPricingDetls.ToList();
        return Ok(equity);
    }

    

         [HttpGet("b-call-schedules")]
    public IActionResult GetSecCallSch()
    {
        var equity = this._DBContext.BCallSchdles.ToList();
        return Ok( equity);
    }


}

