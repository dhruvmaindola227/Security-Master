using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class BSecSumm
    {
        public string? SecurityDescription { get; set; }
        public string SecurityName { get; set; } = null!;
        public string? AssetType { get; set; }
        public string? InvestmentType { get; set; }
        public double? TradingFactor { get; set; }
        public double? PricingFactor { get; set; }
    }
}
