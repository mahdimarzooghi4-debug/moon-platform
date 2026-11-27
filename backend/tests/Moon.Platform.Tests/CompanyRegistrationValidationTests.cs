using Moon.Platform.Api.Modules.CompanyRegistration;
using Moon.Platform.Api.Modules.StartupRegistration;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class CompanyRegistrationValidationTests
{
    [Theory]
    [InlineData("01234567890", 11, true)]
    [InlineData("0123456789", 10, true)]
    [InlineData("0123456789", 11, false)]
    [InlineData("۰۱۲۳۴۵۶۷۸۹", 10, false)]
    [InlineData("012345678x", 10, false)]
    public void StructuralIdentifierValidation(string value, int length, bool expected)
        => Assert.Equal(expected, CompanyRegistrationValidation.IsDigits(value, length));

    [Fact]
    public void DocumentsRequireSupportedSignatures()
    {
        Assert.True(CompanyRegistrationValidation.IsSupportedDocument("%PDF-1.7"u8.ToArray()));
        Assert.True(CompanyRegistrationValidation.IsSupportedDocument(new byte[] { 0xff, 0xd8, 0xff, 0x00 }));
        Assert.False(CompanyRegistrationValidation.IsSupportedDocument("<html>"u8.ToArray()));
        Assert.False(CompanyRegistrationValidation.IsSupportedDocument([]));
    }

    [Fact]
    public void CompanyAndStartupNoticesHaveDistinctKeys()
    {
        var id = Guid.NewGuid();
        var startup = RegistrationSmsNotice.Create(id, RegistrationSmsNotice.Submitted);
        var company = RegistrationSmsNotice.Create(id, RegistrationSmsNotice.Submitted, "company_application");
        Assert.NotEqual(startup.DeduplicationKey, company.DeduplicationKey);
        Assert.Equal("company_application", company.AggregateType);
        Assert.Equal("{}", company.PayloadJson);
    }
}
