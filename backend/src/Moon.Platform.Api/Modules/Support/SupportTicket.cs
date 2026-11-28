using System.ComponentModel.DataAnnotations;
namespace Moon.Platform.Api.Modules.Support;

public sealed class SupportTicket
{
    public Guid Id { get; init; }
    [MaxLength(36)] public string TrackingCode { get; init; } = Guid.NewGuid().ToString("N");
    [MaxLength(200)] public string Name { get; init; } = "";
    [MaxLength(11)] public string Mobile { get; init; } = "";
    [MaxLength(254)] public string? Email { get; init; }
    [MaxLength(32)] public string Audience { get; init; } = "";
    [MaxLength(32)] public string Topic { get; init; } = "";
    [MaxLength(200)] public string Title { get; init; } = "";
    [MaxLength(4000)] public string Description { get; init; } = "";
    [MaxLength(32)] public string Status { get; set; } = "received";
    [MaxLength(4000)] public string? ResponseNote { get; set; }
    [MaxLength(200)] public string? AssignedToSubject { get; set; }
    public int Revision { get; set; } = 1;
    public DateTimeOffset SubmittedAtUtc { get; init; } = DateTimeOffset.UtcNow;
    public DateTimeOffset UpdatedAtUtc { get; set; } = DateTimeOffset.UtcNow;
}
public sealed record SubmitSupportRequest(Guid RequestId, string? Name, string? Mobile, string? Email, string? Audience, string? Topic, string? Title, string? Description, string? MobileVerification);
public sealed record UpdateSupportRequest(int Revision, string? Status, string? ResponseNote, bool AssignToSelf);
public static class SupportValidation
{
    public static bool TryCreate(SubmitSupportRequest request, out SupportTicket ticket)
    {
        ticket = new SupportTicket
        {
            Id = request.RequestId, Name = request.Name?.Trim() ?? "", Mobile = request.Mobile?.Trim() ?? "",
            Email = string.IsNullOrWhiteSpace(request.Email) ? null : request.Email.Trim(),
            Audience = request.Audience ?? "", Topic = request.Topic ?? "", Title = request.Title?.Trim() ?? "",
            Description = request.Description?.Trim() ?? ""
        };
        return ticket.Id != Guid.Empty && ticket.Name.Length is > 0 and <= 200
            && StartupRegistration.StartupMobileVerification.IsMobile(ticket.Mobile)
            && (ticket.Email is null || ticket.Email.Length <= 254 && new EmailAddressAttribute().IsValid(ticket.Email))
            && ticket.Audience is "individual" or "company" or "startup" or "other"
            && ticket.Topic is "participation" or "registration" or "projects" or "contact" or "general"
            && ticket.Title.Length is > 0 and <= 200 && ticket.Description.Length is > 0 and <= 4000;
    }
    public static bool SameSubmission(SupportTicket existing, SupportTicket incoming) =>
        existing.Id == incoming.Id && existing.Mobile == incoming.Mobile && existing.Name == incoming.Name
        && existing.Email == incoming.Email && existing.Audience == incoming.Audience && existing.Topic == incoming.Topic
        && existing.Title == incoming.Title && existing.Description == incoming.Description;
    public static bool ValidUpdate(UpdateSupportRequest request) =>
        request.Revision > 0 && request.Revision < int.MaxValue
        && request.Status is "received" or "in_review" or "closed"
        && (request.ResponseNote?.Trim().Length ?? 0) <= 4000
        && (request.Status != "closed" || !string.IsNullOrWhiteSpace(request.ResponseNote));
}
