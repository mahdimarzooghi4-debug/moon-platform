using System.Security.Cryptography;
using System.Globalization;

namespace Moon.Platform.Api.Modules.StartupRegistration;

/// <summary>Ten decimal digits are a reference, not a bearer credential.
/// Legacy high-entropy codes remain usable through the old lookup endpoint.</summary>
public static class StartupTrackingCode
{
    private const string LegacyAlphabet = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

    public static string Create()
    {
        // Independent uniform decimal digits, including leading zero.
        return string.Concat(Enumerable.Range(0, 10)
            .Select(_ => RandomNumberGenerator.GetInt32(10).ToString(CultureInfo.InvariantCulture)));
    }

    public static string? Normalize(string? value)
    {
        if (value is null || value.Length > 48) return null;
        if (value.Length == 10)
        {
            var digits = new string(value.Select(c => c switch
            {
                >= '۰' and <= '۹' => (char)('0' + c - '۰'),
                >= '٠' and <= '٩' => (char)('0' + c - '٠'),
                _ => c
            }).ToArray());
            return digits.All(char.IsAsciiDigit) ? digits : null;
        }
        if (value.Length == 19 && value[4] == '-' && value[9] == '-' && value[14] == '-')
            value = value.Remove(14, 1).Remove(9, 1).Remove(4, 1);
        value = value.ToUpperInvariant();
        if (value.Length == 48 && value.All(Uri.IsHexDigit)) return value;
        if (value.Length != 16) return null;
        return value.All(character => LegacyAlphabet.Contains(character)) ? value : null;
    }

    public static bool IsLegacyBearerCode(string? normalized)
        => normalized is { Length: 48 or 16 };
}
