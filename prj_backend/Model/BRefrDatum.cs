using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class BRefrDatum
    {
        public int SecurityId { get; set; }
        public string? BloombergIndustryGroup { get; set; }
        public string? BloombergIndustrySubGroup { get; set; }
        public string? BloombergIndustrySector { get; set; }
        public string? CountryOfIssuance { get; set; }
        public string? RiskCurrency { get; set; }
        public string? Issuer { get; set; }
        public string? IssueCurrency { get; set; }
    }
}
