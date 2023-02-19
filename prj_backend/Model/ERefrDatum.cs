using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class ERefrDatum
    {
        public string? CountryOfIssuance { get; set; }
        public string? Exchange { get; set; }
        public string? Issuer { get; set; }
        public string? IssueCurrency { get; set; }
        public string? TradingCurrency { get; set; }
        public string? BbgIndustrySubGroup { get; set; }
        public string? BloombergIndustryGroup { get; set; }
        public string? BloombergSector { get; set; }
        public string? CountryOfIncorporation { get; set; }
        public string? RiskCurrency { get; set; }
    }
}
