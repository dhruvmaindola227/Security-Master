using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class BSecIden
    {
        public int SecurityId { get; set; }
        public string? Isin { get; set; }
        public string? BbgTicker { get; set; }
        public string? BbgUniqueId { get; set; }
        public string? Cusip { get; set; }
        public string? Sedol { get; set; }
    }
}
