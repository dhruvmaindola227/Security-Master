using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class EPricDetl
    {
        public int SecurityId { get; set; }
        public double? OpenPrice { get; set; }
        public double? ClosePrice { get; set; }
        public double? Volume { get; set; }
        public double? LastPrice { get; set; }
        public double? PeRatio { get; set; }
        public double? BidPrice { get; set; }
        public double? AskPrice { get; set; }
    }
}
