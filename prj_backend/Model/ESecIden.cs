using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class ESecIden
    {
        public string? Cusip { get; set; }
        public string? Isin { get; set; }
        public string? Sedol { get; set; }
        public string? BloombergTicker { get; set; }
        public string? TickerAndExchange { get; set; }
        public string? BbgGlobalId { get; set; }
        public string? BloombergUniqueId { get; set; }
    }
}
