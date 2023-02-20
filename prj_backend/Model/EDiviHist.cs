using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class EDiviHist
    {
        public int SecurityId { get; set; }
        public string? DividendType { get; set; }
        public string? Frequency { get; set; }
        public double? DividendAmount { get; set; }
        public DateTime? DividendExDate { get; set; }
        public DateTime? DividendDeclaredDate { get; set; }
        public DateTime? DividendRecordDate { get; set; }
        public DateTime? DividendPayDate { get; set; }
    }
}
