using Moon.Platform.Api.Modules.StartupRegistration;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class StartupTrackingCodeTests
{
    [Fact]
    public void NewCodesAreSixteenRandomAlphabetCharacters()
    {
        var codes = Enumerable.Range(0, 256).Select(_ => StartupTrackingCode.Create()).ToArray();
        Assert.All(codes, code =>
        {
            Assert.Equal(16, code.Length);
            Assert.Matches("^[0-9A-HJKMNP-TV-Z]{16}$", code);
            Assert.Equal(code, StartupTrackingCode.Normalize(code));
        });
        Assert.Equal(codes.Length, codes.Distinct().Count());
    }

    [Theory]
    [InlineData("7k3m-9w6r-2d8x-4h5q", "7K3M9W6R2D8X4H5Q")]
    [InlineData("7K3M9W6R2D8X4H5Q", "7K3M9W6R2D8X4H5Q")]
    [InlineData("abcdef012345abcdef012345abcdef012345abcdef012345", "ABCDEF012345ABCDEF012345ABCDEF012345ABCDEF012345")]
    public void NormalizesNewAndLegacyCodes(string supplied, string expected)
        => Assert.Equal(expected, StartupTrackingCode.Normalize(supplied));

    [Theory]
    [InlineData(null)]
    [InlineData("")]
    [InlineData("12345678")]
    [InlineData("7K3M-9W6R-2D8X-4H5I")]
    [InlineData("7K3M9W6R2D8X4H5U")]
    [InlineData("7K3M9W6R2D8X4H5-")]
    [InlineData("7K3M-9W6R2-D8X-4H5Q")]
    public void RejectsMalformedCodes(string? supplied)
        => Assert.Null(StartupTrackingCode.Normalize(supplied));
}
