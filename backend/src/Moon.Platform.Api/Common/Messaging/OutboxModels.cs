using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;

namespace Moon.Platform.Api.Common.Messaging;

public static class IntegrationEventTypes
{
    public const string FundingCommitted = "FundingCommitted";
    public const string PaymentReconciled = "PaymentReconciled";
    public const string FundingThresholdReached = "FundingThresholdReached";
    public const string ExecutionDisbursementReleased = "ExecutionDisbursementReleased";
    public const string ExecutionImpactPublished = "ExecutionImpactPublished";
    public const string ExecutionCompleted = "ExecutionCompleted";
}

[Table("outbox_messages", Schema = "moon")]
[Index(nameof(DeduplicationKey), IsUnique = true)]
[Index(nameof(PublishedAtUtc), nameof(DeadLetteredAtUtc), nameof(NextAttemptAtUtc))]
[Index(nameof(LockedUntilUtc))]
public sealed class OutboxMessage
{
    public Guid Id { get; init; } = Guid.NewGuid();

    [MaxLength(120)]
    public string EventType { get; init; } = string.Empty;

    [MaxLength(120)]
    public string AggregateType { get; init; } = string.Empty;

    [MaxLength(200)]
    public string AggregateId { get; init; } = string.Empty;

    [MaxLength(240)]
    public string DeduplicationKey { get; init; } = string.Empty;

    public string PayloadJson { get; init; } = string.Empty;

    [MaxLength(128)]
    public string CorrelationId { get; init; } = string.Empty;

    public DateTimeOffset OccurredAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public DateTimeOffset NextAttemptAtUtc { get; set; } = DateTimeOffset.UtcNow;
    public int PublishAttempts { get; set; }
    public DateTimeOffset? LockedUntilUtc { get; set; }

    [MaxLength(200)]
    public string? LockedBy { get; set; }

    public DateTimeOffset? PublishedAtUtc { get; set; }
    public DateTimeOffset? DeadLetteredAtUtc { get; set; }

    [MaxLength(2000)]
    public string? LastError { get; set; }
}

public sealed record IntegrationEventEnvelope(
    Guid MessageId,
    string EventType,
    string AggregateType,
    string AggregateId,
    string PayloadJson,
    DateTimeOffset OccurredAtUtc,
    string CorrelationId);

public sealed record FundingCommittedEvent(
    Guid CommitmentId,
    Guid ProjectId,
    long AmountMinor,
    string Currency,
    string CommittedBySubject,
    DateTimeOffset CommittedAtUtc);

public sealed record PaymentReconciledEvent(
    Guid PaymentId,
    Guid CommitmentId,
    Guid ProjectId,
    long AmountMinor,
    string Currency,
    string Provider,
    string? ProviderReference,
    DateTimeOffset ReconciledAtUtc);

public sealed record FundingThresholdReachedEvent(
    Guid ProjectId,
    Guid ProjectVersionId,
    long FundingTargetMinor,
    long AllocableAmountMinor,
    string Currency,
    DateTimeOffset ReachedAtUtc);

public sealed record ExecutionDisbursementReleasedEvent(
    Guid DisbursementId,
    Guid ProjectId,
    Guid StageId,
    long AmountMinor,
    string Currency,
    Guid LedgerJournalId,
    DateTimeOffset ReleasedAtUtc);

public sealed record ExecutionImpactPublishedEvent(
    Guid ImpactReportId,
    Guid ProjectId,
    Guid StageId,
    int AttemptNumber,
    Guid? SupersedesImpactReportId,
    DateTimeOffset PublishedAtUtc);

public sealed record ExecutionCompletedEvent(
    Guid ProjectId,
    Guid CloseoutId,
    string ClosedBySubject,
    DateTimeOffset ClosedAtUtc);

public sealed class MessagingOptions
{
    public const string SectionName = "Messaging";
    public string Transport { get; set; } = "InMemory";
    public bool OutboxDispatchEnabled { get; set; }
    public string RabbitMqHost { get; set; } = "localhost";
    public string RabbitMqVirtualHost { get; set; } = "/";
    public string RabbitMqUsername { get; set; } = "guest";
    public string RabbitMqPassword { get; set; } = "guest";
    public int PollIntervalMilliseconds { get; set; } = 1000;
    public int LockSeconds { get; set; } = 30;
    public int MaxAttempts { get; set; } = 12;
}

public static class IntegrationEventSerialization
{
    public static string ToJson<T>(T value) => JsonSerializer.Serialize(value);
}
