namespace Moon.Platform.Api.Modules.Identity;

public static class SystemRoles
{
    public const string ProductOwner = "product_owner";
    public const string Evaluator = "evaluator";
    public const string Company = "company";
    public const string Startup = "startup";
    public const string Finance = "finance";
    public const string Supervisor = "supervisor";
    public const string Auditor = "auditor";
    public const string SystemAdmin = "system_admin";

    public static readonly Guid ProductOwnerId = Guid.Parse("00000000-0000-0000-0000-000000000001");
    public static readonly Guid EvaluatorId = Guid.Parse("00000000-0000-0000-0000-000000000002");
    public static readonly Guid CompanyId = Guid.Parse("00000000-0000-0000-0000-000000000003");
    public static readonly Guid StartupId = Guid.Parse("00000000-0000-0000-0000-000000000004");
    public static readonly Guid FinanceId = Guid.Parse("00000000-0000-0000-0000-000000000005");
    public static readonly Guid SupervisorId = Guid.Parse("00000000-0000-0000-0000-000000000006");
    public static readonly Guid AuditorId = Guid.Parse("00000000-0000-0000-0000-000000000007");
    public static readonly Guid SystemAdminId = Guid.Parse("00000000-0000-0000-0000-000000000008");

    public static Role[] Seed() =>
    [
        new() { Id = ProductOwnerId, Code = ProductOwner, Name = "مدیر محصول / خانه خالق" },
        new() { Id = EvaluatorId, Code = Evaluator, Name = "ارزیاب" },
        new() { Id = CompanyId, Code = Company, Name = "شرکت تأمین‌کننده" },
        new() { Id = StartupId, Code = Startup, Name = "استارتاپ مجری" },
        new() { Id = FinanceId, Code = Finance, Name = "کارشناس مالی ماه" },
        new() { Id = SupervisorId, Code = Supervisor, Name = "نهاد ناظر" },
        new() { Id = AuditorId, Code = Auditor, Name = "ممیز" },
        new() { Id = SystemAdminId, Code = SystemAdmin, Name = "مدیر سامانه" }
    ];
}
