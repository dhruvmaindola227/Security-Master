using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class BRisk
    {
        public double? MacaulayDuration { get; set; }
        public double? _30dVolatility { get; set; }
        public double? _90dVolatility { get; set; }
        public double? Convexity { get; set; }
        public double? _30dayAverageVolume { get; set; }
    }
}
