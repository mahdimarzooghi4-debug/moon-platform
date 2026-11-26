using System.Security.Cryptography;

namespace Moon.Platform.Api.Modules.StartupRegistration;

/// <summary>New codes contain 80 random bits. Legacy 48-character hex codes remain valid.</summary>
public static class StartupTrackingCode
{
    private const string Alphabet = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

    public static string Create()
    {
        var random = RandomNumberGenerator.GetBytes(16);
        return new string(random.Select(value => Alphabet[value & 31]).ToArray());
    }

    public static string? Normalize(string? value)
    {
        if (value is null) return null;
        // Do not allow arbitrary separators or ambiguous substitutions.
        if (value.Length == 19 && value[4] == '-' && value[9] == '-' && value[14] == '-')
            value = value.Remove(14, 1).Remove(9, 1).Remove(4, 1);
        value = value.ToUpperInvariant();
        if (value.Length == 48 && value.All(Uri.IsHexDigit)) return value;
        if (value.Length != 16) return null;
        return value.All(character => Alphabet.Contains(character)) ? value : null;
    }
}
