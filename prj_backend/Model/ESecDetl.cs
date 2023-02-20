using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class ESecDetl
    {
        public int SecurityId { get; set; }
        public bool? IsAdrFlag { get; set; }
        public string? AdrUnderlyingTicker { get; set; }
        public string? AdrUnderlyingCurrency { get; set; }
        public string? SharesPerAdr { get; set; }
        public DateTime? IpoDate { get; set; }
        public string? PricingCurrency { get; set; }
        public long? SettleDays { get; set; }
        public double? VotingRightsPerShare { get; set; }
        public double? TotalSharesOutstanding { get; set; }
    }
}
