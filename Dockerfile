FROM mcr.microsoft.com/dotnet/sdk:10.0.100 AS build
WORKDIR /src/backend

COPY backend/ .
RUN dotnet restore Moon.Platform.slnx
RUN dotnet publish src/Moon.Platform.Api/Moon.Platform.Api.csproj \
    -c Release \
    --no-restore \
    -o /app/publish \
    /p:UseAppHost=false

RUN dotnet tool install --global dotnet-ef --version 10.0.12
ENV PATH="$PATH:/root/.dotnet/tools"
RUN dotnet ef migrations bundle \
    --project src/Moon.Platform.Api/Moon.Platform.Api.csproj \
    --startup-project src/Moon.Platform.Api/Moon.Platform.Api.csproj \
    -o /app/migrate \
    --self-contained false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
COPY --from=build /app/migrate ./migrate

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
USER app

ENTRYPOINT ["sh", "-c", "if [ \"$RUN_MIGRATIONS\" = \"1\" ]; then ./migrate --connection \"$ConnectionStrings__Postgres\"; fi; exec dotnet Moon.Platform.Api.dll"]
