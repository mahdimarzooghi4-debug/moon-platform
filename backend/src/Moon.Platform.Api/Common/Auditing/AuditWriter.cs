using Moon.Platform.Api.Infrastructure.Persistence;

namespace Moon.Platform.Api.Common.Auditing;

public sealed record AuditWriteRequest(
    string ActorSubject,
    string Action,
    string SubjectType,
    string SubjectId,
    string CorrelationId,
    string? OrganizationId = null,
    string? ProjectId = null,
    string? BeforeJson = null,
    string? AfterJson = null,
    string? IpAddress = null);

public interface IAuditWriter
{
    Task<Guid> AppendAsync(AuditWriteRequest request, CancellationToken cancellationToken = default);
}

public sealed class AuditWriter(MoonDbContext dbContext) : IAuditWriter
{
    public async Task<Guid> AppendAsync(AuditWriteRequest request, CancellationToken cancellationToken = default)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(request.ActorSubject);
        ArgumentException.ThrowIfNullOrWhiteSpace(request.Action);
        ArgumentException.ThrowIfNullOrWhiteSpace(request.SubjectType);
        ArgumentException.ThrowIfNullOrWhiteSpace(request.SubjectId);
        ArgumentException.ThrowIfNullOrWhiteSpace(request.CorrelationId);

        var auditEvent = new AuditEvent
        {
            ActorSubject = request.ActorSubject,
            Action = request.Action,
            SubjectType = request.SubjectType,
            SubjectId = request.SubjectId,
            OrganizationId = request.OrganizationId,
            ProjectId = request.ProjectId,
            BeforeJson = request.BeforeJson,
            AfterJson = request.AfterJson,
            IpAddress = request.IpAddress,
            CorrelationId = request.CorrelationId
        };

        dbContext.AuditEvents.Add(auditEvent);
        await dbContext.SaveChangesAsync(cancellationToken);
        return auditEvent.Id;
    }
}
