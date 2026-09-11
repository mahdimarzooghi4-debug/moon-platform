using System.Security.Claims;

namespace Moon.Platform.Api.Modules.Funding;

public sealed record CreateFundingCommitmentRequest(long AmountMinor, string Currency);

public static class FundingEndpoints
{
    public static IEndpointRouteBuilder MapFundingEndpoints(this IEndpointRouteBuilder endpoints)
    {
        endpoints.MapPost("/api/v1/projects/{projectId:guid}/commitments", async Task<IResult> (
            Guid projectId,
            CreateFundingCommitmentRequest request,
            ClaimsPrincipal principal,
            HttpContext context,
            IFundingService fundingService,
            CancellationToken cancellationToken) =>
        {
            if (!context.Request.Headers.TryGetValue("Idempotency-Key", out var idempotencyValues)
                || string.IsNullOrWhiteSpace(idempotencyValues.ToString()))
            {
                return Results.BadRequest(new
                {
                    code = "commitment_invalid_idempotency_key",
                    message = "Idempotency-Key header is required.",
                    correlation_id = context.TraceIdentifier
                });
            }

            var result = await fundingService.CreateCommitmentAsync(
                projectId,
                request.AmountMinor,
                request.Currency,
                idempotencyValues.ToString(),
                RequireActor(principal),
                context.TraceIdentifier,
                context.Connection.RemoteIpAddress?.ToString(),
                cancellationToken);

            return ToHttpResult(result, context);
        }).RequireAuthorization();

        return endpoints;
    }

    private static IResult ToHttpResult(CommitmentOperationResult result, HttpContext context)
    {
        if (result.Succeeded)
        {
            return result.Replayed
                ? Results.Ok(new { commitment = result.Commitment, replayed = true })
                : Results.Json(
                    new { commitment = result.Commitment, replayed = false },
                    statusCode: StatusCodes.Status201Created);
        }

        var body = new
        {
            code = result.ErrorCode,
            message = result.ErrorMessage,
            correlation_id = context.TraceIdentifier
        };

        return result.ErrorCode switch
        {
            "project_not_found" => Results.NotFound(body),
            "commitment_actor_inactive" => Results.Json(body, statusCode: StatusCodes.Status403Forbidden),
            "commitment_project_not_published" or "commitment_idempotency_conflict" => Results.Conflict(body),
            _ => Results.BadRequest(body)
        };
    }

    private static string RequireActor(ClaimsPrincipal principal)
    {
        var actor = principal.FindFirstValue("sub");
        if (string.IsNullOrWhiteSpace(actor))
        {
            throw new InvalidOperationException("Authenticated identity is missing the required 'sub' claim.");
        }

        return actor;
    }
}
