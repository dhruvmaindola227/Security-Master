using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class ESecSumm
    {
        public string SecurityName { get; set; } = null!;
        public string? SecurityDescription { get; set; }
        public bool? HasPosition { get; set; }
        public bool? IsActiveSecurity { get; set; }
        public double? LotSize { get; set; }
        public string? BbgUniqueName { get; set; }
    }
}
