using Moon.Platform.Api.Modules.StartupRegistration;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class StartupTrackingCodeTests
{
    [Fact]
    public void NewCodesAreTenDecimalDigitsAndNotBearerCredentials()
    {
        for (var i = 0; i < 256; i++)
        {
            var code = StartupTrackingCode.Create();
            Assert.Matches("^[0-9]{10}$", code);
            Assert.Equal(code, StartupTrackingCode.Normalize(code));
            Assert.False(StartupTrackingCode.IsLegacyBearerCode(code));
        }
    }

    [Theory]
    [InlineData("0123456789", "0123456789")]
    [InlineData("۰۱۲۳۴۵۶۷۸۹", "0123456789")]
    [InlineData("٠١٢٣٤٥٦٧٨٩", "0123456789")]
    [InlineData("7k3m-9w6r-2d8x-4h5q", "7K3M9W6R2D8X4H5Q")]
    [InlineData("abcdef012345abcdef012345abcdef012345abcdef012345", "ABCDEF012345ABCDEF012345ABCDEF012345ABCDEF012345")]
    public void NormalizesNewAndLegacyCodes(string supplied, string expected)
        => Assert.Equal(expected, StartupTrackingCode.Normalize(supplied));

    [Theory]
    [InlineData("7K3M9W6R2D8X4H5Q")]
    [InlineData("ABCDEF012345ABCDEF012345ABCDEF012345ABCDEF012345")]
    public void LegacyCodesRemainBearerCredentials(string code)
        => Assert.True(StartupTrackingCode.IsLegacyBearerCode(StartupTrackingCode.Normalize(code)));

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("12345678")]
    [InlineData("12345678901")]
    [InlineData("12345a7890")]
    [InlineData("12345-6789")]
    [InlineData("7K3M-9W6R-2D8X-4H5I")]
    [InlineData("7K3M9W6R2D8X4H5U")]
    public void RejectsMalformedCodes(string? supplied)
        => Assert.Null(StartupTrackingCode.Normalize(supplied));
}
