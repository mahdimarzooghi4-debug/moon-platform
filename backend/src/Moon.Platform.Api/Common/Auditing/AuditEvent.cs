namespace Moon.Platform.Api.Common.Auditing;

public sealed class AuditEvent
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string ActorSubject { get; set; } = string.Empty;
    public string Action { get; set; } = string.Empty;
    public string SubjectType { get; set; } = string.Empty;
    public string SubjectId { get; set; } = string.Empty;
    public string? OrganizationId { get; set; }
    public string? ProjectId { get; set; }
    public string? BeforeJson { get; set; }
    public string? AfterJson { get; set; }
    public string? IpAddress { get; set; }
    public string CorrelationId { get; set; } = string.Empty;
    public DateTimeOffset OccurredAtUtc { get; set; } = DateTimeOffset.UtcNow;
}
