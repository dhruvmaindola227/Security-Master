using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class BPricingDetl
    {
        public double? AskPrice { get; set; }
        public double? HighPrice { get; set; }
        public double? LowPrice { get; set; }
        public double? OpenPrice { get; set; }
        public double? Volume { get; set; }
        public double? LastPrice { get; set; }
        public double? BidPrice { get; set; }
    }
}
