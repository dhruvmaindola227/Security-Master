using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace prj_backend.Model
{
    public partial class SecMas_DC9Context : DbContext
    {
        public SecMas_DC9Context()
        {
        }

        public SecMas_DC9Context(DbContextOptions<SecMas_DC9Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Bond> Bonds { get; set; } = null!;
        public virtual DbSet<Equity> Equities { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

        }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bond>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.AskPrice).HasColumnName("Ask Price");

                entity.Property(e => e.AssetType)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("Asset Type");

                entity.Property(e => e.AttributeId).HasColumnName("Attribute id");

                entity.Property(e => e.BbgTicker)
                    .HasMaxLength(6)
                    .IsUnicode(false)
                    .HasColumnName("BBG Ticker");

                entity.Property(e => e.BbgUniqueId)
                    .HasMaxLength(11)
                    .IsUnicode(false)
                    .HasColumnName("BBG Unique ID");

                entity.Property(e => e.BidPrice).HasColumnName("Bid Price");

                entity.Property(e => e.BloombergIndustryGroup)
                    .HasMaxLength(24)
                    .IsUnicode(false)
                    .HasColumnName("Bloomberg Industry Group");

                entity.Property(e => e.BloombergIndustrySector)
                    .HasMaxLength(24)
                    .IsUnicode(false)
                    .HasColumnName("Bloomberg Industry Sector");

                entity.Property(e => e.BloombergIndustrySubGroup)
                    .HasMaxLength(24)
                    .IsUnicode(false)
                    .HasColumnName("Bloomberg Industry Sub Group");

                entity.Property(e => e.CallDate)
                    .HasColumnType("datetime")
                    .HasColumnName("Call Date");

                entity.Property(e => e.CallNotificationMaxDays).HasColumnName("Call Notification Max Days");

                entity.Property(e => e.CallPrice).HasColumnName("Call Price");

                entity.Property(e => e.CallableFlag).HasColumnName("Callable Flag");

                entity.Property(e => e.Cap).IsUnicode(false);

                entity.Property(e => e.CountryOfIssuance)
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("Country of Issuance");

                entity.Property(e => e.CouponFrequency).HasColumnName("Coupon Frequency");

                entity.Property(e => e.CouponType)
                    .HasMaxLength(5)
                    .IsUnicode(false)
                    .HasColumnName("Coupon Type");

                entity.Property(e => e.Cusip)
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .HasColumnName("CUSIP");

                entity.Property(e => e.FirstCouponDate)
                    .HasColumnType("datetime")
                    .HasColumnName("First Coupon Date");

                entity.Property(e => e.FixToFloatFlag).HasColumnName("Fix to Float Flag");

                entity.Property(e => e.Floor).IsUnicode(false);

                entity.Property(e => e.HasPosition).HasColumnName("Has Position");

                entity.Property(e => e.HighPrice).HasColumnName("High Price");

                entity.Property(e => e.InvestmentType)
                    .HasMaxLength(14)
                    .IsUnicode(false)
                    .HasColumnName("Investment Type");

                entity.Property(e => e.Isin)
                    .HasMaxLength(12)
                    .IsUnicode(false)
                    .HasColumnName("ISIN");

                entity.Property(e => e.IssueCurrency)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("Issue Currency");

                entity.Property(e => e.IssueDate)
                    .HasColumnType("datetime")
                    .HasColumnName("Issue Date");

                entity.Property(e => e.Issuer)
                    .HasMaxLength(24)
                    .IsUnicode(false);

                entity.Property(e => e.LastPrice).HasColumnName("Last Price");

                entity.Property(e => e.LastResetDate)
                    .IsUnicode(false)
                    .HasColumnName("Last Reset Date");

                entity.Property(e => e.LowPrice).HasColumnName("Low Price");

                entity.Property(e => e.MacaulayDuration).HasColumnName("Macaulay Duration");

                entity.Property(e => e.Maturity).HasColumnType("datetime");

                entity.Property(e => e.OpenPrice).HasColumnName("Open Price");

                entity.Property(e => e.PenultimateCouponDate)
                    .HasColumnType("datetime")
                    .HasColumnName("Penultimate Coupon Date");

                entity.Property(e => e.PfAssetClass)
                    .HasMaxLength(6)
                    .IsUnicode(false)
                    .HasColumnName("PF Asset Class");

                entity.Property(e => e.PfCountry)
                    .HasMaxLength(24)
                    .IsUnicode(false)
                    .HasColumnName("PF Country");

                entity.Property(e => e.PfCreditRating)
                    .HasMaxLength(4)
                    .IsUnicode(false)
                    .HasColumnName("PF Credit Rating");

                entity.Property(e => e.PfCurrency)
                    .HasMaxLength(26)
                    .IsUnicode(false)
                    .HasColumnName("PF Currency");

                entity.Property(e => e.PfInstrument)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("PF Instrument");

                entity.Property(e => e.PfLiquidityProfile)
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("PF Liquidity Profile");

                entity.Property(e => e.PfMaturity)
                    .IsUnicode(false)
                    .HasColumnName("PF Maturity");

                entity.Property(e => e.PfNaicsCode)
                    .IsUnicode(false)
                    .HasColumnName("PF NAICS Code");

                entity.Property(e => e.PfRegion)
                    .HasMaxLength(13)
                    .IsUnicode(false)
                    .HasColumnName("PF Region");

                entity.Property(e => e.PfSector)
                    .IsUnicode(false)
                    .HasColumnName("PF Sector");

                entity.Property(e => e.PfSubAssetClass)
                    .HasMaxLength(59)
                    .IsUnicode(false)
                    .HasColumnName("PF Sub Asset Class");

                entity.Property(e => e.PricingFactor).HasColumnName("Pricing Factor");

                entity.Property(e => e.PutDate)
                    .IsUnicode(false)
                    .HasColumnName("Put Date");

                entity.Property(e => e.PutNotificationMaxDays)
                    .IsUnicode(false)
                    .HasColumnName("Put Notification Max Days");

                entity.Property(e => e.PutPrice)
                    .IsUnicode(false)
                    .HasColumnName("Put Price");

                entity.Property(e => e.PutableFlag).HasColumnName("Putable Flag");

                entity.Property(e => e.ResetFrequency)
                    .IsUnicode(false)
                    .HasColumnName("Reset Frequency");

                entity.Property(e => e.RiskCurrency)
                    .HasMaxLength(3)
                    .IsUnicode(false)
                    .HasColumnName("Risk Currency");

                entity.Property(e => e.SecurityDescription)
                    .HasMaxLength(22)
                    .IsUnicode(false)
                    .HasColumnName("Security Description");

                entity.Property(e => e.SecurityName)
                    .HasMaxLength(22)
                    .IsUnicode(false)
                    .HasColumnName("Security Name");

                entity.Property(e => e.Sedol)
                    .HasMaxLength(7)
                    .IsUnicode(false)
                    .HasColumnName("SEDOL");

                entity.Property(e => e.Spread).IsUnicode(false);

                entity.Property(e => e.TradingFactor).HasColumnName("Trading Factor");

                entity.Property(e => e._30dVolatility).HasColumnName("30D Volatility");

                entity.Property(e => e._30dayAverageVolume).HasColumnName("30Day Average Volume");

                entity.Property(e => e._90dVolatility).HasColumnName("90D Volatility");
            });

            modelBuilder.Entity<Equity>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.AdrUnderlyingCurrency)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ADR Underlying Currency");

                entity.Property(e => e.AdrUnderlyingTicker)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ADR Underlying Ticker");

                entity.Property(e => e.AskPrice)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Ask Price");

                entity.Property(e => e.AttributeId).HasColumnName("Attribute id");

                entity.Property(e => e.AverageVolume20d)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Average Volume - 20D");

                entity.Property(e => e.BbgGlobalId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("BBG Global ID");

                entity.Property(e => e.BbgIndustrySubGroup)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("BBG Industry Sub Group");

                entity.Property(e => e.BbgUniqueName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("BBG Unique Name");

                entity.Property(e => e.Beta)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.BidPrice)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Bid Price");

                entity.Property(e => e.BloombergIndustryGroup)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Bloomberg Industry Group");

                entity.Property(e => e.BloombergSector)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Bloomberg Sector");

                entity.Property(e => e.BloombergTicker)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Bloomberg Ticker");

                entity.Property(e => e.BloombergUniqueId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Bloomberg Unique ID");

                entity.Property(e => e.ClosePrice)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Close Price");

                entity.Property(e => e.CountryOfIncorporation)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Country of Incorporation");

                entity.Property(e => e.CountryOfIssuance)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Country of Issuance");

                entity.Property(e => e.Cusip)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("CUSIP");

                entity.Property(e => e.DividendAmount)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dividend Amount");

                entity.Property(e => e.DividendDeclaredDate)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dividend Declared Date");

                entity.Property(e => e.DividendExDate)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dividend Ex Date");

                entity.Property(e => e.DividendPayDate)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dividend Pay Date");

                entity.Property(e => e.DividendRecordDate)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dividend Record Date ");

                entity.Property(e => e.DividendType)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Dividend Type");

                entity.Property(e => e.Exchange)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Frequency)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HasPosition)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Has Position");

                entity.Property(e => e.IpoDate)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("IPO Date");

                entity.Property(e => e.IsActiveSecurity)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Is Active Security");

                entity.Property(e => e.IsAdrFlag)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Is ADR Flag");

                entity.Property(e => e.Isin)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ISIN");

                entity.Property(e => e.IssueCurrency)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Issue Currency");

                entity.Property(e => e.Issuer)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastPrice)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Last Price");

                entity.Property(e => e.LotSize)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Lot Size");

                entity.Property(e => e.OpenPrice)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Open Price");

                entity.Property(e => e.PeRatio)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PE Ratio");

                entity.Property(e => e.PfAssetClass)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Asset Class");

                entity.Property(e => e.PfCountry)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Country");

                entity.Property(e => e.PfCreditRating)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Credit Rating");

                entity.Property(e => e.PfCurrency)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Currency");

                entity.Property(e => e.PfInstrument)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Instrument");

                entity.Property(e => e.PfLiquidityProfile)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Liquidity Profile");

                entity.Property(e => e.PfMaturity)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Maturity");

                entity.Property(e => e.PfNaicsCode)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF NAICS Code");

                entity.Property(e => e.PfRegion)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Region");

                entity.Property(e => e.PfSector)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Sector");

                entity.Property(e => e.PfSubAssetClass)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("PF Sub Asset Class");

                entity.Property(e => e.PricingCurrency)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Pricing Currency");

                entity.Property(e => e.ReturnYtd)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Return - YTD");

                entity.Property(e => e.RiskCurrency)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Risk Currency");

                entity.Property(e => e.SecurityDescription)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Security Description");

                entity.Property(e => e.SecurityName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Security Name");

                entity.Property(e => e.Sedol)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("SEDOL");

                entity.Property(e => e.SettleDays)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Settle Days");

                entity.Property(e => e.SharesPerAdr)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Shares Per ADR");

                entity.Property(e => e.ShortInterest)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Short Interest");

                entity.Property(e => e.TickerAndExchange)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Ticker and Exchange");

                entity.Property(e => e.TotalSharesOutstanding)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Total Shares Outstanding");

                entity.Property(e => e.TradingCurrency)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Trading Currency");

                entity.Property(e => e.Volatility90d)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Volatility - 90D");

                entity.Property(e => e.Volume)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.VotingRightsPerShare)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("Voting Rights Per Share");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
