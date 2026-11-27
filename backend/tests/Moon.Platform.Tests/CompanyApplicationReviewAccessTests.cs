using Microsoft.Extensions.Configuration;
using Moon.Platform.Api.Modules.CompanyRegistration;
using Moon.Platform.Api.Modules.Identity;
using Xunit;

namespace Moon.Platform.Tests;

public sealed class CompanyApplicationReviewAccessTests
{
    [Fact]
    public void ReviewRequiresActiveSystemAdminRoleAndEnabledFeature()
    {
        var subject = Guid.NewGuid().ToString("D");
        var active = new CurrentIdentity(Guid.NewGuid(), subject, null, true, [SystemRoles.SystemAdmin], []);
        var config = new ConfigurationBuilder().AddInMemoryCollection(new Dictionary<string,string?>
        {
            ["CompanyRegistration:ReviewEnabled"] = "true"
        }).Build();
        Assert.True(CompanyApplicationReviewEndpoints.MayRead(active, config));
        Assert.False(CompanyApplicationReviewEndpoints.MayRead(active with { IsActive = false }, config));
        Assert.True(CompanyApplicationReviewEndpoints.MayRead(active with { UserId = Guid.NewGuid(), ExternalSubject = Guid.NewGuid().ToString("D") }, config));
        Assert.False(CompanyApplicationReviewEndpoints.MayRead(active with { IdentityRoles = [] }, config));
        Assert.False(CompanyApplicationReviewEndpoints.MayRead(active with { IdentityRoles = [SystemRoles.Company] }, config));
        Assert.False(CompanyApplicationReviewEndpoints.MayRead(active with { IdentityRoles = [SystemRoles.ProductOwner] }, config));
        Assert.False(CompanyApplicationReviewEndpoints.MayRead(null, config));
        Assert.False(CompanyApplicationReviewEndpoints.MayRead(active, new ConfigurationBuilder().Build()));
    }
}
