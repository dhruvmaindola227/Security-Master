using System;
using System.Collections.Generic;

namespace prj_backend.Model
{
    public partial class BSecDetl
    {
        public DateTime? FirstCouponDate { get; set; }
        public string? Cap { get; set; }
        public string? Floor { get; set; }
        public double? CouponFrequency { get; set; }
        public double? Coupon { get; set; }
        public string? CouponType { get; set; }
        public string? Spread { get; set; }
        public bool? CallableFlag { get; set; }
        public bool? FixToFloatFlag { get; set; }
        public bool? PutableFlag { get; set; }
        public DateTime? IssueDate { get; set; }
        public DateTime? LastResetDate { get; set; }
        public DateTime? Maturity { get; set; }
        public double? CallNotificationMaxDays { get; set; }
        public DateTime? PutNotificationMaxDays { get; set; }
        public DateTime? PenultimateCouponDate { get; set; }
        public string? ResetFrequency { get; set; }
        public bool? HasPosition { get; set; }
    }
}
