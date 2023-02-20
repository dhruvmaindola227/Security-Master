using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class BCallSchdle
    {
        public int SecurityId { get; set; }
        public DateTime? CallDate { get; set; }
        public double? CallPrice { get; set; }
    }
}
