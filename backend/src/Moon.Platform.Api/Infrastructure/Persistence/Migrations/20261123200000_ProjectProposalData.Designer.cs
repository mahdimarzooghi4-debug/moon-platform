using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Moon.Platform.Api.Infrastructure.Persistence;

#nullable disable

namespace Moon.Platform.Api.Infrastructure.Persistence.Migrations
{
    [DbContext(typeof(MoonDbContext))]
    [Migration("20261123200000_ProjectProposalData")]
    public partial class ProjectProposalData
    {
    }
}
