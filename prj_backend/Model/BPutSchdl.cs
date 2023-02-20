using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class BPutSchdl
    {
        public int SecurityId { get; set; }
        public DateTime? PutDate { get; set; }
        public double? PutPrice { get; set; }
    }
}
