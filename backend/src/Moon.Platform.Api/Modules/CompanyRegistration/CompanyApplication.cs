using System.ComponentModel.DataAnnotations;

namespace Moon.Platform.Api.Modules.CompanyRegistration;

// An application is not an Organization, an approved tax identity, or a user account.
public sealed class CompanyApplication
{
    public Guid Id { get; init; } = Guid.NewGuid();
    [MaxLength(11)] public required string NationalIdentifier { get; init; }
    [MaxLength(200)] public required string Name { get; init; }
    [MaxLength(40)] public required string RegistrationNumber { get; init; }
    [MaxLength(100)] public required string LegalForm { get; init; }
    [MaxLength(40)] public required string RegistrationDate { get; init; }
    [MaxLength(200)] public required string ActivityField { get; init; }
    [MaxLength(254)] public string? Website { get; init; }
    [MaxLength(100)] public required string Province { get; init; }
    [MaxLength(100)] public required string City { get; init; }
    [MaxLength(1000)] public required string Address { get; init; }
    [MaxLength(10)] public required string PostalCode { get; init; }
    [MaxLength(100)] public required string RepresentativeFirstName { get; init; }
    [MaxLength(100)] public required string RepresentativeLastName { get; init; }
    [MaxLength(10)] public required string RepresentativeNationalId { get; init; }
    [MaxLength(120)] public required string RepresentativePosition { get; init; }
    [MaxLength(11)] public required string Mobile { get; init; }
    [MaxLength(254)] public required string Email { get; init; }
    [MaxLength(40)] public string? Telephone { get; init; }
    [MaxLength(50)] public required string EconomicCode { get; init; }
    [MaxLength(50)] public required string TaxIdentifier { get; init; }
    [MaxLength(100)] public required string TaxFileStatus { get; init; }
    [MaxLength(200)] public string? TaxOffice { get; init; }
    [MaxLength(4000)] public string? Notes { get; init; }
    [MaxLength(10)] public required string TrackingCode { get; set; }
    [MaxLength(32)] public required string Status { get; set; }
    public required byte[] RepresentativeLetter { get; init; }
    public required byte[] EstablishmentNotice { get; init; }
    public required byte[] ArticlesOfAssociation { get; init; }
    public required byte[] LatestChangesNotice { get; init; }
    public DateTimeOffset SubmittedAtUtc { get; init; } = DateTimeOffset.UtcNow;
}
