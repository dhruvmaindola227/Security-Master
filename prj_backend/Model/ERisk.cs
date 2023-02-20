using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class ERisk
    {
        public int SecurityId { get; set; }
        public double? AverageVolume20d { get; set; }
        public double? Beta { get; set; }
        public double? ShortInterest { get; set; }
        public double? ReturnYtd { get; set; }
        public double? Volatility90d { get; set; }
    }
}
